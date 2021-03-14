import React,{useState, useEffect} from 'react'

const Morning = (props) => {

    const year = props.date.getFullYear();
    const month = ("0" + (1 + props.date.getMonth())).slice(-2);
    const day = ("0" + props.date.getDate()).slice(-2);
    const date =  year + "-" + month + "-" + day;
    const site = props.site;

    const[post, setPosts] = useState('');
    const[breakfast1, setBreakfast1] = useState('준비중입니다');
    const[breakfast2, setBreakfast2] = useState('');

    useEffect( () => {
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[date] )

    const fetchInitialData = async () => {

        const res = await fetch('http://127.0.0.1:8000/api/cafeteria/'+site+'/'+date);
        const data = await res.json();
        
        //setPosts(data);

        if(data.detail != 'Not found.'){
            const breakfast1Arr = data.breakfast_type_1.split(",");
            const breakfast2Arr = data.breakfast_type_2.split(",");
            const breakfast1_element = [];
            const breakfast2_element = [];

            for(let i=0;i<breakfast1Arr.length;i++){
                if(i==0){
                    breakfast1_element.push(<li>{breakfast1Arr[i]}😊</li>)
                }else{
                    breakfast1_element.push(<li>{breakfast1Arr[i]}</li>)
                }
            };
            setBreakfast1(breakfast1_element);
            for(let i=0;i<breakfast2Arr.length;i++){
                if(i==0){
                    breakfast2_element.push(<li>{breakfast2Arr[i]}😊</li>)
                }else{
                    breakfast2_element.push(<li>{breakfast2Arr[i]}</li>)
                }
            };
            setBreakfast2(breakfast2_element);
        }else{
            setBreakfast1('등록전입니다');
            setBreakfast2('');
        }
        
    }

    return (
        <div>
            <div>{breakfast1}</div><br/>
            <div>{breakfast2}</div><br/>
        </div>
    )
}
export default Morning