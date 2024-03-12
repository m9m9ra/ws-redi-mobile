import 'react-native-url-polyfill/auto';
import {makeAutoObservable} from "mobx";
import {createClient} from '@supabase/supabase-js';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppState} from "react-native";
import {User} from "../../entities/User";
import {dataSourese} from "../../settings/dataSourese";

export class UserStore {
    public auth: boolean = false;
    public session: any;
    private userRepository =  dataSourese.getRepository(User);

    constructor() {
        makeAutoObservable(this)
    }

    public userAuth = async () => {
        this.auth = true;
        const newUser = Object.assign(new User(), {
            id: 1,
            auth: true
        });
        await this.userRepository.save(newUser);
    }

    public userExit = async () => {
        const user = await this.userRepository.findOneBy({id: 1});
        user.auth = false;
        await this.userRepository.save(user);
        this.setAuth(user.auth);
    }

    public baseConnect = async () => {
        console.log(process.env.SUPABASE_KEY);
        const baseUrl = 'https://obgdtxwesplowrosworm.supabase.co';
        // @ts-ignore
        const baseKey: string = process.env.SUPABASE_KEY;
        const supabase = createClient(baseUrl, baseKey, {
            db: {
                schema: 'public',
            },
            auth: {
                storage: AsyncStorage,
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: false,
            }
        });
        await dataSourese.initialize();

        supabase.from(`product`)
            .select()
            .then(res => console.log(res.data))


        AppState.addEventListener('change', (state) => {
            if (state === 'active') {
                supabase.auth.startAutoRefresh()
            } else {
                supabase.auth.stopAutoRefresh()
            }
        })


    }

    public checkToken = async () => {
        const user = await this.userRepository.findOneBy({id: 1});
        this.setAuth(user.auth);
    }

    private setAuth = (auth: boolean) => {
        this.auth = auth;
    }
}