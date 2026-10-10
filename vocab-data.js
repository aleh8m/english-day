const VOCAB=[
[
['Animals · الحيوانات','🐾','cat|قط,dog|كلب,fish|سمكة,bird|طائر,rabbit|أرنب,duck|بطة,hen|دجاجة,cow|بقرة,sheep|خروف,horse|حصان,lion|أسد,elephant|فيل'],
['Colors & shapes · الألوان والأشكال','🎨','red|أحمر,blue|أزرق,yellow|أصفر,green|أخضر,pink|وردي,purple|بنفسجي,black|أسود,white|أبيض,circle|دائرة,square|مربع,triangle|مثلث,star|نجمة'],
['Family & feelings · العائلة والمشاعر','👨‍👩‍👧‍👦','mother|أم,father|أب,sister|أخت,brother|أخ,baby|طفل رضيع,grandmother|جدة,grandfather|جد,family|عائلة,happy|سعيد,sad|حزين,tired|متعب,scared|خائف'],
['School things · أدوات المدرسة','🎒','book|كتاب,pencil|قلم رصاص,pen|قلم حبر,bag|حقيبة,ruler|مسطرة,eraser|ممحاة,desk|مكتب,chair|كرسي,teacher|معلم,student|طالب,paper|ورق,crayon|قلم تلوين'],
['My body · جسمي','🧒','head|رأس,hair|شعر,face|وجه,eye|عين,ear|أذن,nose|أنف,mouth|فم,tooth|سن,hand|يد,arm|ذراع,leg|ساق,foot|قدم']
],
[
['Fruit & vegetables · فواكه وخضار','🍎','apple|تفاحة,banana|موزة,orange|برتقالة,grape|عنب,lemon|ليمون,pear|كمثرى,peach|خوخ,watermelon|بطيخ,tomato|طماطم,potato|بطاطا,carrot|جزر,cucumber|خيار'],
['Food & drink · طعام وشراب','🍽️','bread|خبز,rice|أرز,pasta|معكرونة,egg|بيضة,cheese|جبن,chicken|دجاج,soup|حساء,sandwich|شطيرة,water|ماء,milk|حليب,juice|عصير,yogurt|لبن'],
['Home & furniture · البيت والأثاث','🏠','house|منزل,room|غرفة,kitchen|مطبخ,bedroom|غرفة نوم,bathroom|حمام,living room|غرفة جلوس,bed|سرير,table|طاولة,sofa|أريكة,door|باب,window|نافذة,garden|حديقة'],
['Clothes & belongings · الملابس والأشياء','👕','shirt|قميص,T-shirt|قميص قصير الأكمام,trousers|بنطال,dress|فستان,skirt|تنورة,coat|معطف,shoes|حذاء,socks|جوارب,hat|قبعة,toy|لعبة,ball|كرة,box|صندوق'],
['Descriptions & positions · الوصف والمكان','📍','big|كبير,small|صغير,long|طويل,short|قصير,new|جديد,old|قديم,clean|نظيف,dirty|متسخ,in|داخل,on|على,under|تحت,behind|خلف']
],
[
['Daily actions · أفعال يومية','⏰','wake up|يستيقظ,get up|ينهض,wash|يغسل,brush|ينظف بالفرشاة,eat|يأكل,drink|يشرب,go|يذهب,come|يأتي,read|يقرأ,write|يكتب,sleep|ينام,help|يساعد'],
['Time & frequency · الوقت والتكرار','📅','morning|صباح,afternoon|بعد الظهر,evening|مساء,night|ليل,today|اليوم,week|أسبوع,weekend|نهاية الأسبوع,hour|ساعة,minute|دقيقة,always|دائمًا,usually|عادة,sometimes|أحيانًا'],
['Hobbies & sport · هوايات ورياضة','⚽','swim|يسبح,draw|يرسم,sing|يغني,dance|يرقص,run|يركض,jump|يقفز,ride|يركب,football|كرة القدم,basketball|كرة السلة,cycling|ركوب الدراجة,music|موسيقى,painting|الرسم بالألوان'],
['Questions & actions · أسئلة وأفعال','❓','who|من,what|ماذا,where|أين,when|متى,why|لماذا,how|كيف,play|يلعب,cook|يطبخ,watch|يشاهد,listen|يستمع,talk|يتحدث,study|يدرس'],
['Weather & nature · الطقس والطبيعة','🌦️','sun|شمس,rain|مطر,wind|ريح,cloud|سحابة,snow|ثلج,hot|حار,cold|بارد,warm|دافئ,cool|معتدل البرودة,tree|شجرة,flower|زهرة,river|نهر']
],
[
['Shopping · التسوق','🛒','shop|متجر,market|سوق,price|سعر,money|مال,cash|نقد,change|باقي النقود,buy|يشتري,sell|يبيع,cheap|رخيص,expensive|غالي,bottle|زجاجة,kilogram|كيلوغرام'],
['Places & directions · أماكن واتجاهات','🗺️','hospital|مستشفى,library|مكتبة,bank|بنك,park|حديقة عامة,restaurant|مطعم,supermarket|سوبرماركت,left|يسار,right|يمين,straight|مستقيم,near|قريب,opposite|مقابل,between|بين'],
['Travel & transport · السفر والنقل','🚌','bus|حافلة,train|قطار,taxi|سيارة أجرة,plane|طائرة,bicycle|دراجة,station|محطة,airport|مطار,ticket|تذكرة,journey|رحلة,passenger|راكب,driver|سائق,stop|موقف'],
['Health · الصحة','🧑‍⚕️','doctor|طبيب,nurse|ممرض,medicine|دواء,headache|صداع,toothache|ألم الأسنان,stomachache|ألم المعدة,fever|حمى,cough|سعال,hurt|يؤلم,rest|راحة,healthy|صحي,sick|مريض'],
['Arrangements & requests · المواعيد والطلبات','🤝','appointment|موعد,meet|يلتقي,tomorrow|غدًا,later|لاحقًا,early|مبكر,late|متأخر,invite|يدعو,accept|يقبل,cancel|يلغي,please|من فضلك,thanks|شكرًا,sorry|آسف']
],
[
['Past actions · أفعال الماضي','📖','went|ذهب,came|أتى,saw|رأى,ate|أكل,drank|شرب,bought|اشترى,made|صنع,took|أخذ,visited|زار,played|لعب,walked|مشى,enjoyed|استمتع'],
['Story sequence · تسلسل القصة','🧩','yesterday|أمس,last week|الأسبوع الماضي,first|أولًا,then|ثم,next|بعد ذلك,finally|أخيرًا,before|قبل,after|بعد,suddenly|فجأة,happened|حدث,returned|عاد,remember|يتذكر'],
['Plans & outdoors · خطط وأنشطة خارجية','🏕️','plan|خطة,picnic|نزهة,trip|رحلة,holiday|عطلة,camping|تخييم,beach|شاطئ,mountain|جبل,forest|غابة,lake|بحيرة,sunny|مشمس,rainy|ماطر,cloudy|غائم'],
['Comparisons · المقارنة','⚖️','bigger|أكبر,smaller|أصغر,taller|أطول,shorter|أقصر,faster|أسرع,slower|أبطأ,better|أفضل,worse|أسوأ,easier|أسهل,harder|أصعب,safer|أكثر أمانًا,quieter|أهدأ'],
['Experiences & problems · تجارب ومشكلات','🧳','experience|تجربة,ever|سبق,never|لم يسبق,already|بالفعل,yet|حتى الآن,lost|فقد,found|وجد,broken|مكسور,missing|مفقود,problem|مشكلة,repair|يصلح,describe|يصف']
],
[
['Opinions & reasons · آراء وأسباب','💡','opinion|رأي,reason|سبب,agree|يوافق,disagree|يختلف,prefer|يفضل,believe|يعتقد,think|يفكر,useful|مفيد,important|مهم,interesting|مثير للاهتمام,boring|ممل,example|مثال'],
['Connect ideas · ربط الأفكار','🔗','because|لأن,however|مع ذلك,although|رغم أن,therefore|لذلك,also|أيضًا,instead|بدلًا من ذلك,especially|خاصة,perhaps|ربما,probably|على الأرجح,actually|في الحقيقة,similar|مشابه,different|مختلف'],
['Keep talking · استمرار الحوار','💬','repeat|يكرر,explain|يشرح,mean|يعني,understand|يفهم,clarify|يوضح,continue|يستمر,ask|يسأل,answer|يجيب,question|سؤال,conversation|محادثة,suggestion|اقتراح,advice|نصيحة'],
['Learning & projects · التعلم والمشاريع','🚀','learn|يتعلم,practise|يتدرب,improve|يحسن,create|ينشئ,design|يصمم,project|مشروع,goal|هدف,challenge|تحدي,skill|مهارة,mistake|خطأ,success|نجاح,team|فريق'],
['Feelings & future · المشاعر والمستقبل','🌟','excited|متحمس,worried|قلق,proud|فخور,confident|واثق,disappointed|محبط,hope|يأمل,dream|حلم,future|مستقبل,choice|اختيار,decision|قرار,possible|ممكن,responsible|مسؤول']
]
].map(groups=>groups.map(([title,icon,words])=>({title,icon,words:words.split(',').map(w=>w.split('|'))})));
const LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(w=>[w,w.toLowerCase()]);
const NUMBERS='zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(' ').map((w,i)=>[w,String(i)]);
