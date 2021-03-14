import React,{useState, useEffect} from 'react'

const Lunch = (props) => {

    let year = props.date.getFullYear();
    let month = ("0" + (1 + props.date.getMonth())).slice(-2);
    let day = ("0" + props.date.getDate()).slice(-2);
    let date =  year + "-" + month + "-" + day;
    let site = props.site;

    const[posts, setPosts] = useState('');
    const[lunch1, setlunch1] = useState('준비중입니다');
    const[lunch2, setlunch2] = useState('');
    const[lunch3, setlunch3] = useState('');

    useEffect( () => {
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[date] )

    const fetchInitialData = async () => {

        const res = await fetch('http://127.0.0.1:8000/api/cafeteria/'+site+'/'+date);
        const posts = await res.json();

        setPosts(posts);

        if(posts.detail != 'Not found.'){
            const lunch1Arr = posts.lunch_type_1.split(",");
            const lunch2Arr = posts.lunch_type_2.split(",");
            const lunch3Arr = posts.lunch_type_3.split(",");

            const lunch1_element = [];
            const lunch2_element = [];
            const lunch3_element = [];

            //const array = ["apple", "banana", "tomato"]
            if(lunch1Arr.length > 1){
                for(let i=0;i<lunch1Arr.length;i++){
                    if(i==0){
                        lunch1_element.push(<li>{lunch1Arr[i]}😊</li> )
                    }else{
                        lunch1_element.push(<li>{lunch1Arr[i]}</li> )
                    }
                    
                };
                setlunch1(lunch1_element);
            }
            
            if(lunch2Arr.length > 1){
                for(let i=0;i<lunch2Arr.length;i++){
                    if(i==0){
                        lunch2_element.push(<li>{lunch2Arr[i]}😊</li> )
                    }else{
                        lunch2_element.push(<li>{lunch2Arr[i]}</li> )
                    }
                };
                setlunch2(lunch2_element);
            }
            
            if(lunch3Arr.length > 1){
                for(let i=0;i<lunch3Arr.length;i++){
                    if(i==0){
                        lunch3_element.push(<li>{lunch3Arr[i]}😊</li> )
                    }else{
                        lunch3_element.push(<li>{lunch3Arr[i]}</li> )
                    }
                };
                setlunch3(lunch3_element);
            }
            
            
        }else{
            setlunch1('등록전입니다');
            setlunch2('');
            setlunch3('');
        }
        
    }

    return (
        <div>
            <div>{lunch1}</div><br/>
            <div>{lunch2}</div><br/>
            <div>{lunch3}</div>
        </div>
    )
}
export default Lunch