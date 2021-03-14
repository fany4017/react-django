import React,{useState, useEffect} from 'react'

const Dinner = (props) => {

    let year = props.date.getFullYear();
    let month = ("0" + (1 + props.date.getMonth())).slice(-2);
    let day = ("0" + props.date.getDate()).slice(-2);

    let date =  year + "-" + month + "-" + day;
    let site = props.site;
    
    const[posts, setPosts] = useState('');
    const[dinner1, setdinner1] = useState('준비중입니다');
    const[dinner2, setdinner2] = useState('');
    const[dinner3, setdinner3] = useState('');

    useEffect( () => {
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[date] )

    const fetchInitialData = async () => {

        const res = await fetch('http://127.0.0.1:8000/api/cafeteria/'+site+'/'+date);
        const posts = await res.json();

        if(posts.detail != 'Not found.'){
            const dinner1Arr = posts.dinner_type_1.split(",");
            const dinner2Arr = posts.dinner_type_2.split(",");
            const dinner3Arr = posts.dinner_type_3.split(",");

            const dinner1_element = [];
            const dinner2_element = [];
            const dinner3_element = [];

            if(dinner1Arr.length > 1){
                for(let i=0;i<dinner1Arr.length;i++){
                    if(i==0){
                        dinner1_element.push(<li>{dinner1Arr[i]}😊</li>)
                    }else{
                        dinner1_element.push(<li>{dinner1Arr[i]}</li>)
                    }
                };
                setdinner1(dinner1_element);
            }
            
            if(dinner2Arr.length > 1){
                for(let i=0;i<dinner2Arr.length;i++){
                    if(i==0){
                        dinner2_element.push(<li>{dinner2Arr[i]}😊</li>)
                    }else{
                        dinner2_element.push(<li>{dinner2Arr[i]}</li>)
                    }
                };
                setdinner2(dinner2_element);
            }
            
            if(dinner3Arr.length > 1){
                for(let i=0;i<dinner3Arr.length;i++){
                    if(i==0){
                        dinner3_element.push(<li>{dinner3Arr[i]}😊</li>)
                    }else{
                        dinner3_element.push(<li>{dinner3Arr[i]}</li>)
                    }
                };
                setdinner3(dinner3_element);
            }
            
        }else{
            setdinner1('등록전입니다');
            setdinner2('');
            setdinner3('');
        }
        
    }

    return (
        <div>
            <div>{dinner1}</div><br/>
            <div>{dinner2}</div><br/>
            <div>{dinner3}</div>
        </div>
    )
}
export default Dinner