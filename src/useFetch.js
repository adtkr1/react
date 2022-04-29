import { useEffect, useState } from "react";

const useFetch =(url) => {
    const [isPending,setIsPending]=useState(true);
    const [data,setdata]=useState(null);
    const [error,seterror]=useState(null);


    useEffect(()=>{
        const abortcnt=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal : abortcnt.signal})
        .then(res=>{
            if(!res.ok)
            {
                throw Error('Error Due to this');
            }
            return res.json();
        })
        .then(data=>{
            setdata(data);
            setIsPending(false);
            seterror(null);
        })
        .catch(err=>{
            if(err.name==="AbortError")
            {
                console.log('Fetch Aborted');
            }
            else
            {
                seterror(err.message);
                setIsPending(false);
            }
        })
        },1000)

        return ()=> abortcnt.abort();

    },[url]);
    return {data,isPending,error}
}
export default useFetch;