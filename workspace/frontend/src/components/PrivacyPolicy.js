/* 사용 소스 */
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({

    background:{
        backgroundColor : '#e8f5e9',
    },
    root: {
        width: '99%',
        paddingLeft: '0%',
        paddingRight: '1%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '40.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    textTitle :{ 
        //NanumGothic-Bold
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'11px',
        textAlign: 'left',
    },
    textDetail :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'10px',
        textAlign: 'left',
    },
    paper: {
        marginTop: '-10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textSub :{ 
        fontFamily: 'SongMyung-Regular',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'14px',
        textAlign: 'center',
    },
}));

const PrivacyPolicy = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <React.Fragment>
        <main className={classes.paper}><br/>
            {/* Hero unit */}
                <div className={classes.root}>
                    <Accordion className={classes.background} expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>개인정보 처리방침에 관한 안내</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        '농협인의밥상' 이하 '농밥'은 이용자의 개인정보보호를 매우 중요시하며, 이용자가 회사의 해당 서비스를 이용함과 동시에 이용자의 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다. <br/>이에 본 서비스의 관리자 NiceHelper는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호, 정보보호에 관한 규정을 준수하고 있습니다. <br/>
                        NiceHelper는 개인정보처리방침을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제1조(개인정보의 처리 목적)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                            농밥은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/><br/>
                            1. 재화 또는 서비스 제공<br/>
                            맞춤서비스 제공을 목적으로 개인정보를 처리합니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제2조(개인정보의 처리 및 보유기간)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 농밥은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.<br/>
                        ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br/>
                        - 위치 정보 : 앱 최초 실행 시 위치 허용 여부를 이용자에게 동의를 구하며 이용자가 원할 시 앱 설정에서 거부할 수 있습니다.<br/>
                        - 이용자 접속 IP : 매월 1회 로그 삭제를 통해 관련 정보를 파기합니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제3조(개인정보의 제3자 제공)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 농밥은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.<br/>
                        ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br/>
                        - 위치 정보 : 앱 최초 실행 시 위치 허용 여부를 이용자에게 동의를 구하며 이용자가 원할 시 앱 설정에서 거부할 수 있습니다.<br/>
                        - 이용자 접속 IP : 매월 1회 로그 삭제를 통해 관련 정보를 파기합니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제4조(개인정보처리 위탁)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        농밥은 개인정보 처리업무를 위탁하고 있지 않습니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제5조(정보주체와 법정대리인의 <br/>권리·의무 및 그 행사방법)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 정보주체는 NiceHelper에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.<br/>
                        ② 다만 수집하는 개인정보는 이용자가 동의한 위치정보와 이용자 IP 정보외에는 없다는점을 인지하고 계셔야합니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제6조(처리하는 개인정보의 항목작성)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 농밥은 다음의 개인정보 항목을 처리하고 있습니다.<br/>
                        [원활한 제화 또는 서비스 제공]<br/>
                        선택항목 : 앱 접속 위치 정보<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제7조(개인정보의 파기)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 농밥은 개인정보 수집을 최소한으로 하고 있습니다.<br/>
                        ② 정보주체로부터 동의받은 개인정보 (앱에 접속하는 시점의 실시간 위치)의 사용여부는 사용자가 직접 언제든 자유롭게 변경 가능합니다.<br/>
                        ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br/>
                        1. 파기절차<br/>
                        농밥은 서버상에 기록된 접속자 IP 정보를 월 1회 일괄 삭제합니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제8조(개인정보의 안전성 확보 조치)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        농밥은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br/>
                        1. 해킹 등에 대비한 기술적 대책<br/>
                        농밥은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 PC내 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.<br/>
                        아울러, SSL 보안 인증서를 적용하고 있습니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제9조(개인정보 자동 수집 장치의 <br/>설치•운영 및 거부에 관한 사항)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        농밥은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하여 편의를 높였습니다.<br/>
                        아울러 구글 애널리틱스(Google Analytics)를 이용하여 로그 분석을 하고 있습니다. 이용자를 식별할 수 없으며 전체적인 로그 분석에만 이용합니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제10조 (개인정보 보호책임자)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 농밥은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br/><br/>
                        ▶ 개인정보 보호책임자<br/>
                        성명 : 신승희<br/>
                        연락처 : nicehelper@gmail.com <br/><br/>
                        ▶ 개인정보 보호 담당부서<br/>
                        담당자 : 김태식<br/>
                        연락처 : nicehelper@gmail.com<br/>
                        ② 정보주체께서는 농밥의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.<br/> 
                        농밥은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제11조(개인정보 열람청구)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.<br/>
                        농밥은 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br/><br/>
                        ▶ 개인정보 열람청구 접수·처리 부서<br/>
                        담당자 : 황규중<br/>
                        연락처 : nicehelper@gmail.com<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제12조(권익침해 구제방법)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.<br/>
                        1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br/>
                        2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br/>
                        3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br/>
                        4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)<br/>
                        「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br/>
                        ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.<br/>
                        </Typography>
                        </AccordionDetails><br/>
                    </Accordion>
                    <Accordion className={classes.background} expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                        <Typography className={classes.secondaryHeading, classes.textTitle}>제13조(개인정보 처리방침 변경)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className={classes.textDetail}>
                        ① 이 개인정보처리방침은 2021년 4월 1부터 적용됩니다.<br/>
                        ② 본 개인정보처리방침에 기재된 내용외의 신규 개인 정보 수집이 발생할 경우 개정 최소 7일전에 서비스 내의 공지사항을 통하여 고지할 것 입니다.<br/> 다만, 수집하는 개인정보의 항목이 민감정보이거나 이용목적의 변경 등과 같이 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지할 것 입니다.<br/>
                        </Typography>
                    </AccordionDetails><br/>
                </Accordion>
            </div><br/><br/>
        </main>
        </React.Fragment>
    );
    }

export default PrivacyPolicy
