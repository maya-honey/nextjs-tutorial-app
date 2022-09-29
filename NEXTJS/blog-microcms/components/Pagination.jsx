import css from '../styles/Pagination.module.css'
import Link from 'next/link';

export default function Pagination({max_num = 7, page_name= "sample"}) {
    const a = Array(max_num);
    if(max_num < 5){
        for (let i = 0; i < max_num; i++){
            a[i] = i + 1;
        }
    }else{
        for (let i = 0; i < 5; i ++){
            if(i < 4){
                a[i] = i + 1;
            }else{
                a[i] = max_num ;
            }
        }
    }
    

    const create_nation = () => {
        if(max_num < 5){
            return(
                a.map((x) => (
                    <Link href={`/${page_name}/${x}`} passHref>
                        <li>
                            <a>
                                <div>{x}</div>
                            </a>
                        </li>
                    </Link>
                ))
            );
            
        }else{
            return(
                a.map((x) => {
                    if(x !== 4){
                        return(
                            <Link href={`/${page_name}/${x}`} passHref>
                                <li>
                                    <a>
                                        <div>{x}</div>
                                    </a>
                                </li>
                            </Link>
                        );
                    }else{
                        return(
                            <li>
                                <a>
                                    <div>...</div>
                                </a>
                            </li>
                        );
                    }
                })
            );
        }
    }


    return(
        <>
        <div className={css.Pagination}>
            <ul>
                {create_nation()}
                
            </ul>
        </div>
        </>
    )
}