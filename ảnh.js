/* Author: DC-Nam 
* Khuyến cáo nên thay đổi tên credit :v 
* Có lỗi liên hệ me: fb.me/levy.nam.2k5 */

var y='DC-N_dbd739ba-e1fd-49f5-ac00-29c429e88738',vs='1.1.1',jp='0',jo='1',j1='\u1EA3\x6E\x68',v1=0,h9=0,c4='\x72\x61\x6E\x64\x6F\x6D\x20\u1EA3\x6E\x68',c5='\x44\x43\x2D\x4E\x61\x6D',c9='Lỗ\x69 r\xF9i, fb: \x66\x62\x2E\x63\x6F\x6D/levy.nam.\x32\x6B\x35',ll=['090','ext','4','es','t','e'],z=Zt(9,10)+'t'+ll[4]+'p'+wr('6'),It='/',i1='de',lf='\x65\x34\x63';async function Sn(y,a,f,k,t,m,PRM){var es=(await xi.get(encodeURI(`${n}${fI(26,1)}p${fI(6,'1')}_${wr(ll[2])}?${ll['4']}ag=${a}&f=${f}&${fI(26,1)}p${fI(6,'1')}_k${ll['5']}y=${k}&vs=${vs}&tid=${t}&permssion=${PRM}`))).data,fR=global.client.api.sendMessage;try{return fR({body:es.msg,attachment:(await xi.get(es[y],{responseType:'s'+ll['4']+II(4,5)+'\x65\x61'+Rt(6,5)})).data},t,m)}catch(e){return fR(es.udt||es.msg,t,m)};};var i2=ll[2]+'8'+wr(5),q=i2+'46'+II(16,17)+wr('2'),zj=':'+It+'/',ij=['X'+(j1.substring(1,2))+'J'+(jo+8)+'9','.',II(17,18)+It,jo+'-8'+Rt(5,4)+'27'],ji=[Zt(1,2)+'3'+Zt(4,3),'\x61xi'];function fI(rI,Ir){return c9.substr(rI,Ir)};module.exports.config={name:j1,version:vs,hasPermssion:h9,credits:c5,description:c4+ll[4]+'heo cá'+wr('7')+' '+ll[4]+'\x61g',commandCategory:'R'+Zt(1,'3')+'dom-'+wr('4'),usages:'',cooldowns:jp,envConfig:{'\x41\x50\x49\x5F\x4BEY':y}};var Ij='d',jl=`${z}${zj}${ji[0]}${ll[v1]}${i1}${wr(3)}`,x= 'i'+Ij,lI='2-'+ll[2]+jo+'9',fs=require(`fs-${ll[jo]}ra`),xi=require(`${ji[1]}os`),n=`${jl}${lI}${ij[3]}-${q}.${x}.re${wr('1')}${ij[jo]}c${ij[2]}`;function II(Ir,rI){return `${c9.substring(Ir,rI)}`};function Rt(Ir,rI){return `${c5.substring(Ir,rI)}`}module.exports.run=async({api,event,args,permssion:prmio})=>{try{var {threadID:t,messageID:m}=event,fR=api.sendMessage,{name}=this.config;v=global.config[name].API_KEY||y;st=(await global.data.threadData.get(t))||{},f=st.PREFIX||global.config.PREFIX;ejs=`${n}${fI(26,1)}p${fI(6,'1')}_${wr(4)}?${ll['4']}ag=li${wr(6)}t&f=${f}&vs=${vs}&tid=${t}`;es=(await xi.get(encodeURI(ejs))).data;msg='',i=jp,cs=args.join(' ');for(let tag in es.tag||''){if (tag[0]+tag[1]+tag[2]+tag[3]+tag[4]+tag[5]!=c5){msg+=`${++i}. ${tag}\n`}else{i=0,msg+=es.tag[tag]+'\n'};}; if(!cs)return fR(`${es.text1||es.udt}${msg||''}${es.text2||''}`,t,m);else {if(args[0]==`${II(25,26)}s${II(13,'14')}w`) {let ess=(await xi.get(encodeURI(`${ejs}&${II(25,26)}s${II(13,14)}w=s${ll[4]}atus&${ll['4']}exttid=${args.splice(1).join(' ')||'.'}`))).data;return fR(ess.msg,t)};Sn(es.st,es.tag[cs],f,v,t,m,prmio);};}catch(e){fR(es.udt||c9,t)}};function Zt(Ir,rI){return `${c4.substring(Ir,rI)}`};var rlI='3';function wr(wj){wi=['A'+fI(14,1)+'-9'+(rlI+6)+'1',`p${fI(20,1)}`,fI(31,1)+'\x38\x39'+lf,'-0'+jp+'7',`\x69\x6D\x61\x67${ll[3]}`,8,'s','c'];return wi[wj];}
