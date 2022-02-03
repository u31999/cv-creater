import { useLocation } from 'react-router-dom';
import classes from '../layout/result.module.css';
import oldClasses from '../layout/form.module.css';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import phoneIcon from '../resources/cell-phone.jpg';
import emailIcon from '../resources/email-icon.jpg';
import facebookIcon from '../resources/facebook-icon.jpg';
import githupIcon from '../resources/githup-icon.jpg';
import linkdinIcon from '../resources/linkdin-icon.jpg';


const OrangeTemplate = (props) => {
    const data = props.data;
    const genralInfo = data.genralInfo;
    const socialmedia = genralInfo.socialMedia;
    const skills = data.skills;
    const about = data.about.about;
    const exprinces = data.exprinces;
    const education = data.unvirsitys;
    const randomWidth = () => {
        let arr = [100, 70, 80, 90, 60];
        let choise = Math.floor(Math.random() * arr.length );
        return arr[choise];
    }

    const styles = StyleSheet.create({
                page: {
                    flexDirection: 'column',
                    backgroundColor: '#E4E4E4',
                    width:'100%',
                        },
                section: {
                    width: '100%',
                    height: '100%',
                    margin: 10,
                    padding: 10,
                    flexGrow: 1
                                }
                });
    const styleHeader = StyleSheet.create({
        header: {
            backgroundColor: '#505050',
            height: '15%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#e3e3e3',
            width: '100%'
        },
        mainTitle : {
            fontWeight: '900',
            fontSize: '25px',
            marginBottom: '5px'

        },
        subTitle : {
            fontWeight: '400',
            fontSize: '14px'
        }
    });
    const styleBody = StyleSheet.create({
        body: {
            height: '85%',
            display: 'flex',
            flexDirection: 'row'
        },
        leftBody: {
            width: '35%',
            height: '100%',
            backgroundColor: 'rgb(246 218 197)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        rightBody: {
            backgroundColor: 'rgb(244 244 244)',
            width: '65%',
            height: '100%'
        },
        topLeft: {
            flex: '1',
            width: '90%'
        },
        bottomLeft: {
            flex:'1',
            width:'90%',
            marginTop: '60px'
        },
        skillsTittle: {
            color: 'rgb(252 133 64)',
            fontWeight: '900',
            fontSize: '30px',
            marginTop: '20px',
            marginBottom: '20px',
        },
        skillsSub : {
            marginBottom: '10px',
            fontWeight: '900',
            fontSize: '20px',
        },
        skillsItem: {
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'column',
        },
        skillsOneItem: {
            marginBottom: '5px',
            textIndent: '5px',
            color: 'rgb(82 74 68)',
            flex: '1'
        },
        image: {
            width: '20px',
            height: '20px'
        },
        textLink: {
            marginLeft: '5px',
             display:'flex',
              alignItems:'center',
               justifyContent:'center',
                fontSize:'12px'
            },
        rightSection: {
            marginLeft: '20px',
            marginRight: '20px',
            display:'flex',
            textAlign: 'justify',
            flexDirection: 'column',
        
        }
    });

    return(
        <PDFViewer>
    <Document style={{width: '100%'}}>
    <Page size="A4" style={styles.page}>
      <View style={styleHeader.header}>
          <Text style={styleHeader.mainTitle}>{genralInfo.fullName[0].toUpperCase() + 
          genralInfo.fullName.slice(1)}</Text>
          <Text style={styleHeader.subTitle}>{genralInfo.occapution.toUpperCase()}</Text>
      </View>
      <View style={styleBody.body}>
            <View style={styleBody.leftBody}>
                <View style={styleBody.topLeft}>
                    <View>
                        <Text style={styleBody.skillsTittle}>SKILLS</Text>
                    </View>
                    <View>
                        <Text style= {styleBody.skillsSub}>Language</Text>
                        <View style={styleBody.skillsItem}>
                        {skills.language.map(l => 
                        <View key={l} style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}> 
                        <Text style={styleBody.skillsOneItem}>{l}</Text>
                        <View  style={{backgroundColor: 'rgb(84 79 75)', flex:'.7', height:'50%', width:'100%', display:'flex', flexDirection:'row'}}>
                        <View style={{backgroundColor: 'rgb(245 135 58)', height:'100%', width:`${randomWidth()}%` }}></View>
                        </View>
                        </View>)}
                        </View>
                    </View>
                    <View>
                        <Text style= {styleBody.skillsSub}>Software</Text>
                        <View style={styleBody.skillsItem}>
                        {skills.software.map(s =>
                        <View key={s} style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}> 
                        <Text style={styleBody.skillsOneItem}>{s}</Text>
                        <View  style={{backgroundColor: 'rgb(84 79 75)', flex:'.7', height:'50%', width:'100%', display:'flex', flexDirection:'row'}}>
                        <View style={{backgroundColor: 'rgb(245 135 58)', height:'100%', width:`${randomWidth()}%` }}></View>
                        </View>
                        </View>)}
                        </View>
                    </View>
                    
                </View>
                <View style={styleBody.bottomLeft}>
                    <Text style={styleBody.skillsTittle}>CONTACT</Text>
                    <View>
                        <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                            <Image src={phoneIcon} style={styleBody.image}></Image>
                            <Text style={styleBody.textLink}>{'+' + genralInfo.phone}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                            <Image src={emailIcon} style={styleBody.image}></Image>
                            <Text style={styleBody.textLink}>{genralInfo.email}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                            <Image src={linkdinIcon} style={styleBody.image}></Image>
                            <Text style={styleBody.textLink}>{socialmedia.linkidin}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                            <Image src={facebookIcon} style={styleBody.image}></Image>
                            <Text style={styleBody.textLink}>{socialmedia.facebook}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                            <Image src={githupIcon} style={styleBody.image}></Image>
                            <Text style={styleBody.textLink}>{socialmedia.github}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styleBody.rightBody}>
                <View style={styleBody.rightSection}>
                    <Text style={styleBody.skillsTittle}>ABOUT</Text>
                    <Text>{about}</Text>
                </View>
                <View style={styleBody.rightSection}>
                    <Text style={styleBody.skillsTittle}>EXPRINCES</Text>
                    
                    {exprinces[0].map((ex, i) => <View key={i} style={{display:'flex', flexDirection:'row'}}>
                        <View style={{flex: '.7'}}>
                            
                        </View>
                        <View>
                            <Text style={{marginBottom:'8px'}}>{ex.companyName.toUpperCase()}</Text>
                            <View>{ex.ocaption.map((o,i) => 
                            <Text key={i} style={{color: '#b6b6b6', fontSize: '14px', marginBottom:'5px'}}>{o.ocaptionName.toUpperCase()}</Text>)}</View>
                        </View>
                    </View>)}      
                </View>
                <View style={styleBody.rightSection}>
                    <Text style={styleBody.skillsTittle}>EDUCATION</Text>
                    <View>
                        {education.map((ed, i) => 
                        <View key={i} style={{display:'flex', flexDirection:'row'}}>
                            <View style={{flex:'.7'}}>
                                <Text>{ed.startDate.slice(0, ed.startDate.indexOf('-') + 1) + 
                                ed.endDate.slice(0, ed.endDate.indexOf('-'))}</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection:'column'}}>
                                <Text>{ed.unvirsityName}</Text>
                                <Text style ={{color: '#b6b6b6', fontSize: '14px', marginBottom:'5px'}}>{ed.degree}</Text>
                            </View>
                        </View>)}
                    </View>
                </View>
                
            </View>

      </View>
    </Page>
     </Document>
     </PDFViewer>
    )

}
const CvWindowOption = (props) => {
    const nullStyle = {
        display: 'flex',
        color: 'red',
        justifyContent: 'center',
        textShadow: 'black 2px 2px 2px',
        marginBottom: '20px',
        marginTop: '20px',
    } 

    const data = props.data;
    if(data === null || data.genralInfo.fullName === '') {
        return(
            <div style={nullStyle}>Your data Is Null !!!!</div>
        )
    } else{
        return(
           
                <OrangeTemplate data= {data}/>
        )
    
    }
    
}

const ResultPage = () => {
    const location = useLocation();
    const data = location.state; 

    
    
    
    return(
        <div className={classes['result-body']}>
            <div className={oldClasses.title}>Your CV Is Ready</div>
            <div className={classes['cv-window']}>
            <CvWindowOption data = {data} />            
            </div>
        </div>
    )
}

export default ResultPage;