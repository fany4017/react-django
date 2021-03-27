/* 사용 소스 */
import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

    li: {
        borderBottom: "1.5px solid rgb(212, 212, 212)",
        paddingBottom: '10px',
    },
    titleTtext :{
        fontWeight: 'Bold',
        color: 'red',
    },
    text :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'15px',
    },
  
}));

const Dinner = (props) => {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능

    let year = props.date.getFullYear();
    let month = ("0" + (1 + props.date.getMonth())).slice(-2);
    let day = ("0" + props.date.getDate()).slice(-2);
    let date =  year + "-" + month + "-" + day;
    let site = props.site;

    const[dinner1, setdinner1] = useState('등록전입니다');
    const[dinner2, setdinner2] = useState('');
    const[dinner3, setdinner3] = useState('');

    const[loading, setLoading] = useState(false); // api 호출했을때 속도가 늦어질 것을 대비해서 loading 변수를 만듬
    const[posts, setPosts] = useState('');

    useEffect( () => {
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[site, date] )

    const fetchInitialData = async () => {
        
        setLoading(true);

        try{

            /* 로컬 서버 호출 */
            //const res = await fetch('http://127.0.0.1:8000/api/cafeteria/'+site+'/'+date);

            /* 운영 서버 호출 */
            const res = await fetch('https://nonghyup-babsang.com/api/cafeteria/'+site+'/'+date);
            //const res = await fetch('http://3.36.126.189/api/cafeteria/'+site+'/'+date);

            const data = await res.json();
            setPosts(data);//data 값이 있으면 posts에 셋팅
            
            if(data.detail != 'Not found.'){
                const dinner1Arr = data.dinner_type_1.split(",");
                const dinner2Arr = data.dinner_type_2.split(",");
                const dinner3Arr = data.dinner_type_3.split(",");

                const dinner1_element = [];
                const dinner2_element = [];
                const dinner3_element = [];

                setdinner1('');
                setdinner2('');
                setdinner3('');

                if(dinner1Arr.length >= 0 || dinner1Arr[0] != ''){
                    for(let i=0;i<dinner1Arr.length;i++){
                        if(i==0){
                            dinner1_element.push(<li><span className={classes.titleTtext}>{dinner1Arr[i]}</span>😊</li>)
                        }else{
                            dinner1_element.push(<li>{dinner1Arr[i]}</li>)
                        }
                    };
                    setdinner1(dinner1_element);
                }
                
                if(dinner2Arr.length > 0 && dinner2Arr[0] != ''){
                    for(let i=0;i<dinner2Arr.length;i++){
                        if(i==0){
                            dinner2_element.push(<li><span className={classes.titleTtext}>{dinner2Arr[i]}</span>😊</li>)
                        }else{
                            dinner2_element.push(<li>{dinner2Arr[i]}</li>)
                        }
                    };
                    setdinner2(dinner2_element);
                }

                if(dinner3Arr.length > 0 && dinner3Arr[0] != ''){
                    for(let i=0;i<dinner3Arr.length;i++){
                        if(i===0){
                            dinner3_element.push(<li><span className={classes.titleTtext}>{dinner3Arr[i]}</span>😊</li>)
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
        }catch(e){
            console.log(e)
        }
        setLoading(false);//api 호출완료되면 loading 값을 true 로 변경 -> 즉, api 값이 넘어오기전에는 대기 중... 으로 나타남
    }
    if(loading){ // api 값이 넘어 오기 전이면..
        return <React.Fragment> 대기 중...</React.Fragment>;
    }
    if(!posts){ // api로부터 받아온 값이 없으면
        return null; //return null
    }
    return (
        <div className={classes.text}>
            <div>{dinner1}</div><br/>
            <div>{dinner2}</div><br/>
            <div>{dinner3}</div>
        </div>
    )
}
export default Dinner