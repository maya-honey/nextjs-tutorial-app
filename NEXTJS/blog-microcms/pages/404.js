import css from "../styles/NotFound.module.css"
import Layout from "../components/Layout"
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

function PageNotFound() {
    const router = useRouter();

    const [sec, setSec] = useState(5);

    

    useEffect(() => {
        const func_one = setInterval(onesec, 1000);
        
        function onesec() {
            if(sec > 0){
                setSec(sec - 1);
            }else{
                clearInterval(func_one);
                router.push('/');
            }
        }

        func_one;
    },[sec])

    return (
        <Layout>
            <div className={css.PageNotFound}>
                <h2>404 Not Found</h2>
                <p>{sec}秒後にリダイレクトします。</p>
            </div>
        </Layout>
    )
}

export default PageNotFound;