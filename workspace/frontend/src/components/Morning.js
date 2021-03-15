import React,{useState, useEffect} from 'react'

const Morning = (props) => {
    
    //날짜 셋팅
    const year = props.date.getFullYear(); //부모컴포넌트(Contents.js) 에서 전달해준 props 인 date 에서 year만 가져옴
    const month = ("0" + (1 + props.date.getMonth())).slice(-2);
    const day = ("0" + props.date.getDate()).slice(-2);
    const date =  year + "-" + month + "-" + day;
    const site = props.site; //부모컴포넌트(Contents.js) 에서 전달해준 props site 값

    //const[post, setPosts] = useState('');
    //아래의 breakfast1, breakfast2 변수에 다가 api 로 호출한 결과를 담아서 화면에 맵핑할 것임
    //왜 1,2 두개냐면.. 구내식당에서 아침메뉴는 크게 두개니까

    const[breakfast1, setBreakfast1] = useState('준비중입니다'); 
    const[breakfast2, setBreakfast2] = useState('');

    const[loading, setLoading] = useState(false); // api 호출했을때 속도가 늦어질 것을 대비해서 loading 변수를 만듬
    const[posts, setPosts] = useState('');

    useEffect( () => { // 이건 컴포넌트가 로딩되면 자동으로 실행되는 함수인데
        //로딩되면 fetchInitialData() 를 사용해서 api 통신을 하여 조식 메뉴를 가져올것임
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[date] ) // , [date] 값 안넣으면 fetchInitialData 가 계속 호출되서 서버에 부하생김....

    const fetchInitialData = async () => { // fetchInitialData 함수 선언을 하는데 async() : 비동기로 선언함

        setLoading(true);

        try{
            //api 통신하는 방법은 axios 랑 fetch 가 있는데 fetch 를 사용함
            //그 이유는 내가 참고한 사이트가 fetch 를 쓰길래 
            const res = await fetch('http://127.0.0.1:8000/api/cafeteria/'+site+'/'+date);
            const data = await res.json(); //res 에 결과가 담기고 그걸 json 으로 파싱해서 data에 담음
            //api서버에서 리턴해줄 값이 없으면 detail : 'Not found.' 를 전달하는데,
            // Not found. 가 아니면 값을 알맞게 편집해서 뿌려줌 (데이터가 있는 케이스)

            setPosts(data);//data 값이 있으면 posts에 셋팅

            if(data.detail != 'Not found.'){ // 화면에 뿌려줄 데이터가 있으면 

                // 예를들어, http://127.0.0.1:8000/api/cafeteria/nhlife/2021-03-04 를 요청하면
                // 아래처럼 리턴해주는데
                // 지금은 조식메뉴를 보여주는 컴포넌트니까 breakfast_type_1, breakfast_type_2 값을 가져올것이다

                // HTTP 200 OK
                // Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
                // Content-Type: application/json
                // Vary: Accept

                // {
                //     "id": 2,
                //     "s_date": "2021-03-04",
                //     "breakfast_type_1": "돼지고기장조림,오징어무국,즉석계란후라이&도시락김,쌀밥&숭늉,김치,칼로리:582.5kcal",
                //     "breakfast_type_2": "신라면,쌀밥&숭늉,김치,칼로리:542.5kcal",
                //     "breakfast_type_3": "",
                //     "lunch_type_1": "콩나물불고기,잡곡밥,미역국,동그랑땡전,견과류연근조림,칼로리:671kcal",
                //     "lunch_type_2": "돼지고기김치찌개,잡곡밥,동그랑땡전,견과류연근조림,칼로리:661.2kcal",
                //     "lunch_type_3": "명동칼국수&칠리통새우볼,유부냉채,칼로리:702.1kcal",
                //     "lunch_type_4": "",
                //     "dinner_type_1": "",
                //     "dinner_type_2": "",
                //     "dinner_type_3": "",
                //     "site": "nhlife"
                // }

                //data 의 "breakfast_type_1": "돼지고기장조림,오징어무국,즉석계란후라이&도시락김,쌀밥&숭늉,김치,칼로리:582.5kcal",
                // 를 예로들면 각각의 메뉴가 콤마로 구분되어있는데 이걸 콤마기준으로 잘라서
                // breakfast1Arr 배열에 담는다, 
                const breakfast1Arr = data.breakfast_type_1.split(",");
                const breakfast2Arr = data.breakfast_type_2.split(",");
                const breakfast1_element = []; // breakfast1_element 라는 조식메뉴1을 담을 빈배열을 만들어서
                const breakfast2_element = [];

                for(let i=0;i<breakfast1Arr.length;i++){ //breakfast1Arr를 돌면서 데이터를 뽑는다.
                    if(i==0){ // 각 첫번째 값인 대표메뉴 뒤에는 이모티콘 적용
                        // breakfast1_element 배열에 push
                        breakfast1_element.push(<li>{breakfast1Arr[i]}😊</li>)
                    }else{
                        breakfast1_element.push(<li>{breakfast1Arr[i]}</li>)
                    }
                };
                //즉 breakfast1_element 에는 <li>상세메뉴1</li> <li>상세메뉴2</li> ... 이런 형태로 html 이 담기게되고
                //그 결과를 const[breakfast1, setBreakfast1] = useState('준비중입니다'); 
                //에 선언한 setBreakfast1 메소드를 사용해서 breakfast1 값을 셋팅한다.
                setBreakfast1(breakfast1_element);

                //조식 메뉴 2에 대해서도 마찬가지로 처리한다.
                for(let i=0;i<breakfast2Arr.length;i++){
                    if(i==0){
                        breakfast2_element.push(<li>{breakfast2Arr[i]}😊</li>)
                    }else{
                        breakfast2_element.push(<li>{breakfast2Arr[i]}</li>)
                    }
                };
                setBreakfast2(breakfast2_element);
            }else{ // 뿌려줄 데이터가 없으면 등록전입니다 셋팅
                setBreakfast1('등록전입니다');
                setBreakfast2('');
            }
        }catch(e){
            console.log(e);
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
        <div>
            {/* 위에서 셋팅한 breakfast1 과, breakfast2 를 뿌려준다. 그럼 끝~~~ */}
            <div>{breakfast1}</div><br/>
            <div>{breakfast2}</div><br/>
        </div>
    )
}
export default Morning