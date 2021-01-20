import React,{useState,useEffect} from 'react'

export default function FunctionComponent() {
    // const [date,setDate] = useState(new Date())
    // hook不能在判断、循环、函数内部调用；只能再说React函数组件中调用，或者是自动一的Hook中
    const [count,setCount] = useState(0)
    // 所有的副作用都要写到这里
    // useEffect(() => {
    //     // 相当于componetDidMount componentWillUnmount componentDidUpdate
    //     const timer = setInterval(()=>{
    //         setDate(new Date())
    //     },1000)
    //     return ()=>{// 清楚副作用（componentWillUnmount）
    //         clearInterval(timer)
    //     }
    // },[])//空数组相当于didmount
    useEffect(() => {
       document.title = count 
    }, [count])// 只有依赖项变化时候才会执行内部函数
    return (
        <div>
            <h3>{useClock().toLocaleTimeString()}</h3>
            <h3 onClick={()=>{setCount(count + 1)}}>{count}</h3>
        </div>
    )
}

// 自定义hook，命名必须用use开头,状态逻辑公用
function useClock(params) {
    const [date,setDate] = useState(new Date())
    // 所有的副作用都要写到这里
    useEffect(() => {
        // 相当于componetDidMount componentWillUnmount componentDidUpdate
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{// 清楚副作用（componentWillUnmount）
            clearInterval(timer)
        }
    },[])//空数组相当于didmount
    return date
}