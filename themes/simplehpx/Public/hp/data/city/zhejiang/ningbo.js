(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('ningbo', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330203","properties":{"name":"海曙区","cp":[121.539698,29.874452],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AGAGACACIGACECAAAAAA@@A@A@A@C@CBA@A@AA@@@@@@AA@@@A@CBC@A@AAA@@AA@@AAA@E@@@AAA@@AA@@@@A@ABI@A@A@@@A@@CC@@A@A@A@C@EB@@A@A@AAA@@@AD@BB@DD@@DDBBBB@BA@@@AB@@BB@@EDA@AB@@@@@@@B@@A@@@@@AA@@CB@@@B@@@@A@B@AB@@@@@@@@@@@B@@@B@@BBA@@@@B@@B@@@B@BB@@@@DD@B@@@@@@@B@@BA@B@@B@@@A@@@@B@@BBA@@@BBA@@@@BBB@@C@EB@@@@@@@B@D@@A@@@@@@DBB@@A@@@@@@B@@@B@@@@@BA@@B@@B@@BA@@DE@G@@B@@BHBBBBBBBDBB@@@@C@E@KC@@AB@@A@A@A@A@@@@@@A@@@AA@C@A@@@@A@@@@@AA@A@@@@B@@@@@@@BA@@@@@@BBB@B@@B@B@BA@B@@BB@B@@@@A@@@@B@@B@@BBB@@B@@B@@B@B@@@@B@@@BBA@@DAHCB@@@B@@@B@@@@BBB@D@@B@B@@B@@@@@@@@@@@FA@A@@@@B@@@@@B@@@@@@ABBB@@B@@@@@BB@@BBBABB@@@BB@@@@@@@B@@@BB@@@@@BA@@@@@@D@@BAB@DBD@BBDDDBHBF@B@D@DAACAA@@E]@@B@BAB@B@D@BB@@F@D@DB@@@@@C@@B@@BB@B@DGHGFIDCBCDAD@"],"encodeOffsets":[[124479,30590]]}},{"type":"Feature","id":"330206","properties":{"name":"北仑区","cp":[121.831303,29.90944],"childNum":9},"geometry":{"type":"MultiPolygon","coordinates":[["@@CBCDAF@D@DBFDBD@BBBAD@DC@AB@BAD@BBB@BCBC@E@CACAAGAC@EBEB"],["@@BDB@D@@@BA@C@AAAAAA@C@AB@B@BBB"],["@@B@DBN@B@B@BA@CACACEAEAEBA@ABAD@D@BBB"],["@@A@A@@BABBBBBDB@@B@BA@A@@ACAA@@A@"],["@@BB@@@AB@@@@AA@@@A@@@@@@@@B@@@@@@"],["@@@@@@@B@@@AB@@@AA@@@@@@@@@B@@"],["@@@@BABA@@BA@@@@AA@@A@@AAAA@AA@@@@@AB@@@BAA@@A@@AAA@@@@D@B@@AB@F@BBBFD"],["@@ABAF@B@BA@@B@B@@B@B@@A@@@@@ADC@AB@BA@@A@@A@@@AA@@@A@@@"],["@@AHDFJHNJPLDDB@BDDBVJJBFADGFCD@DADCBEDKBAFAH@DABCDIBCDADCBE@S@O@GDKDAFAJ@`BPAxBNCH@HFXTHDHBF@H@FBNFH@JAXIFCFKBO@IAKMIaMcKKIKGKMMEUIeUGEGIEGAOIIOYAEGIY]IEGEOASI[EMAYAK@EAYMemWUAPAHAHAH@FCJADCBEBA@EBGDEDA@ABA@C@C@@BABC@C@A@CBABCBEBABEHCDCBA@C@ABCJCFCDCDABCDCBCB@FC@A@ABCB@D@H@F@DADCDEBA@ABAB@DGHGHCBCBEBEDE@IBABDHDBBB@BADCDEBEDGDBB@BA@E@G@CBEBA@CBAB@FADC@AAC@@DABABC@A@CBC@@F@B@BG@CACBAB@BBDDB@BBHAHAF@DABCBE@CDC@C@CACCCAECCAECOIEC@AC@CACBC@CCCAC@ABAACAA@C@AD@BADADAF@DADABCDA@C@@@@DBDBBADAFBD@BBB@BAB@@ABAB@@A@@@A@@@AB@@A@A@@@@@AB@BABFFB@@@CF@B@BA@@B@BAAAB@@CD@@A@@@A@@@@@A@A@BB@@@@@B@@ABA@@@@@AB@AABCBDFDDBBDDHBH@JBHBHDFBFDDDDDBHDHBFDFDFDBFBD@F@HAH@H@FDFDDFDHBHFFDFFDFBHDJBNDTHLFFDFDFDPJ`STMlar[iPATCHDFD"]],"encodeOffsets":[[[124939,30621]],[[124955,30627]],[[124935,30618]],[[125088,30612]],[[125033,30576]],[[124865,30450]],[[124965,30519]],[[124971,30520]],[[124853,30643]]]}},{"type":"Feature","id":"330211","properties":{"name":"镇海区","cp":[121.713162,29.952107],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@FCiJKxl_H@Z@pDT@L@NAJEOIECECECKESGMCIAGCEAECCEEEAGCGCEECECG@G@GBE@C@EACACECEAECGAGCCCCECEAGCGAIAG@GACCAACCCEACCEEICCCACACBCDAD@@FDA@@@BB@@B@@@@@@@B@BB@BBB@B@@B@@@BB@@BB@B@@@@A@@BCF@@C@AAC@C@E@@B@BA@@@@BA@@@@@@@C@@A@@A@@@@@AB@@@@A@@@A@@@@@A@@@@@A@@@AA@@A@@@@B@@@@A@@B@@AB@@CDAA@ACACA@@@@@A@@A@@BCBCC@@@@@@A@@@CB@@AB@@A@@NA@@@@@@B@@@FBB@B@@BB@@@@CD@@AB@@ABBB@B@@@BB@@@A@@@@@@B@@@@AB@@@@@@@BA@GB@@@@@A@C@@@@@A@BA@A@ABABA@ABA@@@A@@A@@ADCB@@KJ@@@@@B@D@D@BA@C@@@AD@@@@@@AB@@@@@B@@@@@@@@@@GB@@@B@B@@@@E@@@@@A@CAA@A@@B@@@@@@@B@BB@@@@@A@@BCBAB@BAB@@@@A@AAC@@@AB@D@@@BCBABCDABABCDEDIHABA@@@A@@@@@@B@@@@@@A@@@AB@@ABABC@@BAAA@@A@@A@A@@@@@@@A@@@AAA@@A@@A@@AA@A@@@C@A@@@AAA@@BAB@BA@@@A@C@A@@@A@@@ABCD@@CB@@G@C@A@G@CA@@ABA@@@ABAD@@@@@B@B@BFDBDAFAHCHGFCHEHCHIHCDAD@DDBLAFBDFAFBD@@DB@AB@F@@@FAFBDB@BB@@@@BA@@DA@BB@BBD@@@@@@@B@@HAFBJBDDBBDBFBF@H@FB@@B@BA@CBA@A@@B@B@BB@@B@@@@@@@BA@@@AB@@@@BB@@@B@BA@@B@@@B@B@BBB@@@B@B@B@@@@@B@@@BB@@B@B@@@B@@@B@@@@A@A@@@@@@B@@@@@BA@@B@B@BAB@B@B@BAB@@AB@@@@@@A@@@@BABA@@@A@@DCFCHAFAFADAH@H@NDF@F@D@D@B@HFFDBDBDDHFHFLHH@BRH"],["@@@B@@A@@@@@B@@@@@@@BB@@@@@@@@B@@@@@@@@AA@@A@@@@@@A@@@"]],"encodeOffsets":[[[124552,30794]],[[124686,30717]]]}},{"type":"Feature","id":"330212","properties":{"name":"鄞州区","cp":[121.558436,29.831662],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@@@A@@@A@@BBBB@@@ED@B@@A@A@AAA@@@BC@@AC@@GGAACAA@CAA@E@A@@BA@GDC@AB@B@@@B@B@D@B@@@@@@HB@B@@CF@@A@@@A@CAAAA@C@CBA@@@@@AB@D@B@FBD@DDH@F@B@B@B@BA@CDADA@@D@F@BB@@BBBDDDDDDFDDBDDDBB@B@@@@@DAB@@@BB@BAB@@ADA@@B@@@BBDBDDFDFDFBDBDFB@B@BBBDL@DBDBB@@B@DBB@BBD@B@FAB@B@@BD@FDRJHFDBBBBFBBB@B@DBBBB@DBDFFDBBBB@BBB@B@H@DBD@BBBFFDF@B@@@B@B@B@B@B@@@@BBBBB@HBD@@B@@BB@@B@@D@D@BBB@@DAD@BB@@BBDF@@DDDDB@B@B@B@NAF@B@D@D@B@@@BBFB@@DBD@F@B@B@BBB@@@AB@FA@@B@@BD@B@BB@@@DBB@B@@B@B@BBD@@@BFBDD@@D@JB@@@ABAAI@A@@BAB@@BB@DFB@BB@@@@B@@ABCAA@G@A@@@@B@@@F@B@B@D@B@B@@@DBJHD@B@@@@ABCDEBA@@@@CE@@@A@@B@JGBAD@BAD@DBB@@@BBBBLJFD@BBBDFBFBD@@BB@B@BCL@DBBBD@BBDHJLRBDBBBHFEFAFAD@LDD@B@BAFEFIDGBEB@@A@@BAB@@@D@B@HBH@B@FBB@BBFBJFDBB@B@@@B@BA@@BA@@BC@E@C@C@A@ABCJGDCNKBAB@FCBAD@B@B@B@BBBBBBBF@BHP@BB@B@@BB@B@D@B@B@BAD@BADCDEDCDEBCBEBC@@BA@@@C@@@@B@@A@@@@AA@@A@@@@@@@A@@A@@AAABAA@@AA@@@@A@@@AABA@@@@@@@A@@@@@A@@B@B@@E@@@@@@@@@@@AA@A@@@@CAA@A@@A@@@A@@@A@GDCB@@AB@A@@@A@@A@A@@@@AA@@@AA@AA@@@@A@@B@@@@@@AAA@@@AABA@A@@@@AAA@A@@@@B@@A@@@@@@@A@@B@B@@B@@@@@B@@B@D@B@@B@@@B@@@@B@B@B@B@@@BA@@LDF@D@@@@@AAACAAAAAAAG@@@AH@F@@CB@@AA@@@@AB@@A@@@@@A@@@A@@@@B@@@AA@C@@@@B@@@@C@A@@@@@@FAD@@@AA@A@@B@AA@@B@AA@@@A@@B@@@A@@@@AAB@@@A@@@@@@@ACC@@@@AAA@@@A@@@@A@@B@AA@@@A@@@A@@@@@@@@@@BAA@B@@@@@@A@@DA@@BB@@@@B@@@@A@@@@@@BAB@FC@@AA@@BA@@B@@AAAAACC@@CCA@@ABC@@B@BBB@B@@@FAD@B@B@B@@@DD@@@B@@@B@BAJ@B@B@@B@@BB@BB@@F@B@BB@@BB@@BB@B@BAD@D@B@@BB@@@@@@BBB@B@DAD@B@B@B@@@@@@A@@@A@@@@@A@@@@@@@@B@@@@@@AB@BABCB@BCBAB@@@DBBBBBDBDB@@@B@@@@@@@@@@AB@B@@A@@@@B@@@@@@@BB@B@B@HAF@@@@AB@@@@@ACA@@C@@DABA@AB@DABADAB@@BDDBB@@DC@@@@@@@@@B@@@@@B@@@@@BB@@@@@B@BD@@@@@@B@ABBB@@@BBB@@@@@BBA@@B@@B@@B@@A@@@@@@B@@@@DB@D@@B@DD@@@B@@@@@@@@@@@@@BD@DBBBF@AD@B@B@AEB@@@@@@E@@B@CKJA@BHA@DHABDD@@@BB@A@BBD@@@@B@@@@@@B@BBBDA@@BDD@@@BDJA@@@@B@@@@BA@@B@@@B@@@B@@@BABB@ABF@CDBB@@BBA@@@ABBB@@@@@BGH@@@@@@@@BB@BCC@B@@@@BBABB@ABAA@@@@AA@@@BA@CDAB@@C@@@@@AB@@@@@@A@@@@@@AA@@@ABBBA@@@@@@@@@A@@@@@AB@@@@AB@@@@@@@B@@@@@B@@B@@BA@@BB@@D@@B@@@A@@BB@@@A@@B@@@@@@B@@B@@ABA@@@@B@DBDABFBFBFBD@B@FBBAFADEBC@@BCDCDADBDBDDFJDFBDDABA@BBA@@@@B@BA@@@A@@@@AAB@B@@@@@B@@@B@@@DC@@BABB@A@AB@@A@ADE@@A@EEBA@ABA@@@@B@B@@@BA@@B@@@B@@@BABA@@BA@AAA@AACBEBCAAAC@C@@D@B@DCBABC@CBEBCBC@ABCD@B@DBBBBAD@DBDDD@DADBD@@BFDPJFDDBFDDBDDDBD@D@DCF@DABA@CBEBGAG@ACAAC@ABADADBH@@A@A@ED@DAB@D@BABA@CD@BBD@BC@EBADAB@FADAH@F@B@@AAAHCFCFADCBC@AAACACGBAJAF@FCFADADAHGHG@CBABAB@FADCBC@C@E@G@CDABAB@D@@EDADADCBADCDCDEDIBAD@B@DADCFGBAFADABADAB@D@D@BA@AD@D@B@BAB@FCHCFAB@FADABCDI@EBGBGBGBO{{uSSYQ]QMIECKKOJUNA@CDEB@BADABC@E@E@EAEBCBE@C@GBI@C@C@E@EAC@C@A@AAAAAAGAIFEBABC@C@EAE@AAG@CBECCACECCCAEAEAGACAE@C@EBCAEBCDCDCBCBGHADCBCDC@C@CAC@ACEACCEAE@CAAC@ACAAACACAE@CBE@E@EF@BBD@BABABC@CBCDCBC@C@E@ABAB@BADA@CBCBABAF@DBBBDBD@F@B@B@DBB@DBD@BBDBDDBDFBDBD@D@BBBBBDDDDBBBJAFADABCBA@E@EAC@CBABA@CBG@G@IBEBA@@BA@A@CBABCDABEBGBG@G@G@EAIAE@GAA@@AE@G@G@C@A@CBEBCDA@CBABABAF@D@D@BAD@DAF@@@F@D@D@L@J@D@HAD@B@JCDABIR@D@B@B@FBJ@DAB@@@B@@A@@@A@@@A@@AAACI@AAAA@ABAB@BAB@BAFABABA@ABAAA@A@AAA@@AAA@A@ABABABAB@BAD@BA@@BA@@@A@A@AAA@AA@@AA@CB@@A@C@A@C@A@A@C@A@AA@@@@@A@@@A@C@@@CAE@A@C@A@A@@AAA@A@C@A@A@@@A@@AAA@@AABCBCBC@A@AACAAA@CAA@CBC@C@GBC@GBABE@AA@@A@@@AA@ACE@@AA@@@@A@C@G@A@@@@@@C@A@@@@@@A@CB@@@@A@CA@AC@A@AB@@EDABA@A@@@CAA@AAA@A@@@EF@BA@@@A@@ACC@@@AA@@@EB@@@@A@CAA@A@@@CB@@@@A@@@CE@@AAA@@AAC@@@@AA@@A@A@A@A@A@ABEBABA@A@CASEA@A@A@@@GBA@A@G@A@A@EBA@A@C@G@A@C@GCIAA@AAA@@B@@AD@@A@@@A@EAAA@@A@@@@@ED@@ABA@C@@@A@@@@BADADAB@@AB@@A@@@A@@@IEAAA@@@A@@@CB@@A@@@@@CEA@@@A@@@ADA@@@A@@@@ACEAAAAA@@B@@CD@@@BA@@@AAACA@@AA@A@@BCBA@@@A@C@AAC@QEAAA@A@@@A@@@ABABAFEJCDAD@B@@A@@@@@AAGC"],"encodeOffsets":[[124099,30450]]}},{"type":"Feature","id":"330205","properties":{"name":"江北区","cp":[121.559282,29.888361],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CA@@ACBECEEAKBCA@CBCDCJGDGFGDGHEDGBGBEACEC@A@A@A@@@@BCBA@@B@BA@@DBH@B@D@H@@@DA@@DCBA@@B@@@B@D@B@@@B@@ABA@AB@BB@@B@D@@@B@B@@BB@@@@BB@BB@@B@@@@@@@B@B@@@@BB@BB@AD@BABA@@BA@@B@@@@@@@@A@@@@B@@@B@BAJGFCDCBABADCBADA@A@@@CBA@@D@BBB@@@@@BA@ABADA@AB@@@@@A@@A@A@@@@@@@AB@B@DBB@@@@@F@@@@@@A@A@@HA@@@@@@@@@@@A@@@@BA@@@@@@BC@@D@B@@A@C@C@A@@@@LI@@DABC@@@BB@@@B@BAB@BABAB@B@@A@B@@@@@D@B@@@@HAB@@A@@@@@@BA@@@@@A@@@@B@@@A@@A@@@AAABA@@BA@@DC@@@@AA@@@AAA@E@@@A@@@@B@@MB@@@BA@@DA@@B@@@@@@@DDDA@AB@@@@B@@@@DBDB@BBBDC@@BA@@@AB@@@@@@A@@B@@@BB@@B@@@@@B@@@@@B@@@B@@@@@BA@@@@B@@@@BD@@@@@@@B@@A@@B@@A@AF@D@D@BBD@@@DE@AB@@@@@@AAA@@AA@@A@@@@AAA@AAAA@@@@@@@A@@@AA@@B@ECADCFEBABEAA@C@EAEAEAA@GCE@EAIAICIAGCG@ICEACA@@@@A@EECECCAEAE@A@@@@@AAAC@CBADCDEJGHCHA@A@@AA@@@@D@@@@CAC@E@@@AAC@A@A@ABA@@@F^@@BBBDCBC@A@E@GACACCAAC@CAA@AB@@@@AB@@ADAFADCFCDCFCDABC@ABA@A@C@A@A@@AA@A@@AGO@AAEAAAAAAA@A@A@C@ABEDA@ABMLCDIHAD@B@B@D@D@FAD@@AB@@ABA@@@A@A@CAIEEAAAA@EAA@G@GAA@C@@@A@AB@@@BA@AFCHEJEFABA@C@KCC@EBEBEFA@CDEBABA@@@CAGCA@A@C@A@IBKH@@@@BBJDFBBB@@D@B@D@B@@@B@DB@BBDBDDDBB@@@BABCD@B@BAB@BBBBL@BBB@@BB@@B@B@@@B@B@@@BADCBAB@B@BB@@@@B@BBBDBB@@@@@DBBDHDF@F@@A@A@C@AB@D@D@BDDBDAB@BABC@AB@BBBBHHJBDDFDBB@@@F@HBDBDBFBDBBF@BADADBFDBDBB@F@D@HB@BB@DDH@FABABAB@B@FBD@ZFDDBBH@F@@@B@BA@@BA@@@A@A@@@A@@@A@C@AA@@C@A"],"encodeOffsets":[[124397,30766]]}},{"type":"Feature","id":"330226","properties":{"name":"宁海县","cp":[121.432606,29.299836],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@BA`AR@FA@C@AEEKGGGMGMCOC]IOCAAC@EAAACAACACAEBC@@BCBCBEDADEBCBGBEBCBCF@B@D@B@FBB@DAD@DADAFBD@F@D@FBBBBDDD@BB@DCBCDADCD@BCDCD@D@DAF@BA@CBA@CDABAFADCDCBABCDADA@CAA@CAEBABABCBADAFCFADADAD@B@H@BADABABABAD@BAD@BABB@BBB@B@BBFBD@BBBD@B@DABAB@B@DBBADABAB@B@DABBB@@BBBBBBBDBBADC@AACAC@@BCBADC@A@C@A@C@AAACE@C@E@C@CBCBI@A@C@AAC@A@CBADCBADABADC@ABABAB@D@DABABAD@B@@A@A@C@CBCAA@ABABABC@ABABC@C@ACCCA@CACCC@C@C@CBADAB@BC@C@E@C@CBC@ABCDE@@BC@E@EAE@EAC@IF@BBD@D@B@BB@BBBDBB@D@DAFBHAL@HAB@J@HB@@B@B@B@FBJBB@D@D@FCFEFC@@BABA@ABAAA@EAC@CCECCCAECCAGCCACCEAAACCAAAECIACAKAEACCGACAGAIAECKAE@GAEAGOae}W^XfyFG@GBG@I@CAEACAAACEACACCCCEEGCEEIEGCCCECAC@C@E@EBGBKBGBEBYBOBG@GBCBEBCDGFCDCDCBCBEDE@EBI@C@C@E@I@C@EAIA@@A@A@EBA@@@CAA@@@C@A@CAC@A@@@ABA@A@AB@BA@AB@@@B@B@BB@@B@@@@DBBB@@@B@@@@CN@B@BBB@B@@@BA@GFA@@BA@@DCDABCDEFEFCDABA@@@ABA@A@@@A@@ACAGGECAAA@IAAAEAAAA@AA@A@C@A@@BAHGB@@A@@@A@C@@@ACCIQMUAAACAE@A@A@@@ADCB@@AAC@@BABA@@@AA@@AEC@@@AACAAAAAA@@A@AC@@@@CAAAA@E@EACACACCA@CGAC@@CC@@AA@C@AA@@@C@C@A@@@@B@@@B@F@D@BA@CBCBC@A@E@C@A@AA@@A@@A@@@@BAFG@@@A@@@@CC@A@A@E@@@AEC@@@@@A@A@CBA@@A@@@CAA@A@E@A@@@@B@@AD@B@@@@GBC@@BA@ADAB@@ABA@C@ABA@ADCD@@@B@@@@DDB@@B@@@@GDA@ADA@A@A@A@C@@@A@C@ADAD@B@@DFB@@BBB@D@D@D@HAP@L@D@@@BBBHDDB@BBB@@@@@BA@A@AAAA@@AAA@A@@@@B@B@BABA@@BA@@ACA@@@@ABAB@BAB@BBB@B@@ABADEDABEFCDCBADADCFAFAD@@@B@FBF@D@B@@@@A@A@C@AB@@A@AB@BAF@@AB@B@@C@A@EBG@G@ICC@C@C@KBKBC@K@OB@@A@CBCBABCB@BA@@@@@@BBB@BB@BBBB@@FBB@@BBBBB@BBB@@@@ABA@CBAB@@AB@@@D@B@BA@KLELAD@B@@@@BBDFBBB@BB@BBD@DBD@B@BB@B@B@HAD@D@B@B@@@@B@@@DAHAFCF@D@D@D@BBFBB@DBBHD@B@@ABAB@@@B@BBBDBDDTLDDDBBDBB@B@F@B@BAB@BA@CB@@@@AAGCAA@@A@@B@@ABAD@DA@@BB@@@BBHBBB@@BBBBBB@@@@@D@DAD@B@B@F@B@@ADAB@B@B@@@@@@F@FBB@@BBBDDBBBBB@@@DBB@@BBBDBBDB@BBB@H@@@BBDBDDDB@BFB@B@BBD@D@FAB@D@B@@ABCD@@@B@@@FAFBD@DBD@@BBD@@B@B@B@@@BAFAD@BAB@H@@@BHAB@DBF@FBB@BBDDJFBB@@BB@@DLBDBDDD@DBDBDBD@BBBBBFBBDB@BDDDBB@B@B@D@D@@A@ADAB@BBB@DDDBDDDFDHHDD@@@@DH@B@BB@BBBADAHCDABAFAB@D@B@B@@@BBBB@@DBF@@BB@@BDF@BBB@BDBHFLFBB@B@D@DBB@@@B@@B@BAB@FCBA@AB@D@B@D@@@D@DAB@DCBADC@@DABAB@BAD@B@F@H@FBB@B@FDBB@B@@BD@D@BBBBDFFBDDFDDBB@@HHDBBDBB@@@BAB@B@DBB@@@@B@F@B@BAD@D@B@BAHA@AB@@AFGDCDCDCB@@@DA@@BBB@FFB@BBF@H@HBB@@@@@BBB@@B@B@BBDBB@@B@D@B@BAB@DAPGBCBA@@HAD@DADADCBADG@@BADA@@DAB@BAL@D@N@B@D@HAF@FBJ@L@H@H@P@HAHADAHAFAF@H@FBD@FDDFDBDBDDFDFDDBDDDDDBFBH@NBF@DBB@"],"encodeOffsets":[[124529,30222]]}},{"type":"Feature","id":"330225","properties":{"name":"象山县","cp":[121.877091,29.470206],"childNum":60},"geometry":{"type":"MultiPolygon","coordinates":[["@@@B@@ADA@@B@@BB@@B@@@FE@AB@@AAE@AA@@@@@AB@@@BAB@B"],["@@C@AB@B@B@BBBBD@B@@CBABAB@BBB@@BBBB@@@BA@@BB@@BB@FAB@DCBA@@B@BBBB@@@B@B@@DBB@@@BA@@B@B@DBBD@B@B@@C@@B@@@B@@BBAB@BBBB@DBJDB@BBBBD@FAB@@ABA@@FAD@@@@B@@@BB@B@DA@@@A@A@AB@BA@A@@AA@A@@@A@AAAA@C@GBC@E@C@C@C@A@C@@A@A@@DABA@A@ACAAA@A@@BA@A@@AAA@A@A@A@A@AA@AAAAAC@A@CBABA@@BAA@AA@AAAAACACAAA@"],["@@A@EBA@A@@B@D@BA@ABE@@B@B@BDBBBBDB@DBF@BBBBD@B@@@B@@A@AA@ECCAAAAA@@BA@@B@B@BA@AB@DA@@@A@@CEAAA@"],["@@@@BBB@FBBABA@@@C@@CAC@A@CB@D"],["@@B@B@@AB@@@AA@@C@A@@@A@@B@@@@BB@@B@"],["@@B@@A@@@@@@AA@@@@AB@@@B@@@@@@B@@@"],["@@@@@BB@B@B@@A@@@@@AC@@@A@@B"],["@@BB@B@@@@B@@@BAB@@@B@@A@AAAA@A@A@@@A@@A@@A@@@AB@@@BA@BB@@@@B@B@@@"],["@@@@@@A@A@@@@@@BB@@B@@@@@@B@@@@@B@@@B@@A@@@@@@@A@@@@@@@@B@@A@@@@@@@@A@@@A@@A@@@@@@@@@@AB@@@@B@A@BBA@@@"],["@@B@@BA@@@@@@B@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@B@B@@@@@B@@A@@@@B@@@@@@@@@@B@@B@@B@@B@@B@@@@@B@@B@@@@@B@@@@@@@@A@@@@@@B@@A@@@A@@@@@@@@@@@@@A@@@@@@A@@@@@A@@@@@@@@A@@@@@@@@AA@@@@@@B@@@@A@@A@@A@@@@B@@@@@@A@@@@@AA@AAA@@A@@@@A@@B@AA@A@A@@@@@@BA@@@@@@@@@@@@@AA@@@@A@@@@B@@@B@@@@BBA@@@@@@@@@AB@@@@A@A@@@@B@@BB@@B@@@@B@@@@@@"],["@@@@@@B@@@@@@A@@A@A@@@@@@@@@@BB@"],["@@FA@A@@@A@@@@@A@@@@@@@AA@@@@@AAA@@AA@@@@@@AA@AA@@A@@@@BA@@@@@AB@A@@AB@@@B@@B@@@@@B@@@@B@B@@@BB@@@@B@@BB@@@@@BB@B@@@AB@@B@@@B@@@@@@A"],["@@ABBDBB@@BABBB@@@BA@@@@B@B@@@@A@@BA@A@@AA@@BA@AA@@AB@@A@@@AB@B@B@@A@@@A@@CAC@A@@@A@BA@AAACC@AB@AA@@A@A@@@@AAAA@AB@@@BA@A@A@@BA@@B@B@BB@BBB@@@@B@@AB@B@D@@BB@@@BA@AB@@@DB@F@@BB@"],["@@@@B@@@@A@A@A@@@@A@@@@@@@@A@@AA@@@@AB@@@A@@@@A@@@@B@@@@B@@@@@@B@@@@@@@BB@@@@@B@@BA@@@BB"],["@@B@@B@BD@@BBA@@@AB@@@@A@@B@B@@A@@BAB@@@@@@@AA@@@B@@A@A@@@@@@BA@@@@AA@A@@B@@@@A@@@A@@@AB"],["@@@@@BB@@@@@@@BA@@@@BB@A@@@@@@@AA@@@A@@@A@@B@@@@"],["@@B@@@B@@@@@B@@@@A@@@@@@A@@@AA@@@BA@@@@@@@@B@@"],["@@@D@B@BB@B@B@BAD@@B@BBBBBFBB@B@@@BBHADADEBABBF@FC@ABAAAA@ABA@C@CBA@AAA@A@ABCBG@E@A@@@FCB@AA@@C@AAAA@@BC@@A@AAEB@@@BBBAB@@A@AC@@A@@@@B@B@D"],["@@@@@@BA@@@A@@AA@@@@A@@@A@@@@B@@@@@@@@@@B@@@B@@B@@@B@@"],["@@ABAB@@@B@@@@B@@@B@B@B@@@@AB@@@B@B@B@B@BA@@@AAA@@@A@@@AB@B@B@BBDBDDBB@@@A@@@@@AA@BA@@B@BB@@B@@@@AA@@@@AB@@@AA@@A@A@@@C@CA@AA@A@C@E@ABABCB@BAB"],["@@@B@@B@B@BBD@@BB@BB@@@@B@B@BBB@@@BAA@@AA@@@@AB@D@B@@A@@A@AAA@A@BA@@@AA@AA@@@@@@B@B@B@@A@@A@@@@A@@@A@AA@A@@@CA@@@@@B@@A@@@@@AB@B@@B@@@A@@@A@CA@@C@AB@B@BB@@@@@@BB@@BF@@@@BA@C@@@A@"],["@@A@@@@B@@@@@B@@@@B@@@BB@A@@B@@B@@B@@AB@@AB@@@@BBA@@BA@@AA@@B@@@@@@A@@@@@@A@@@@@A@@@@@AB@@@@A@@@@BA@@@A@@@@@@BA@@@@@@A"],["@@@@@@@B@BB@@BB@@BABB@@BB@@@B@BAB@@@B@@A@AB@@A@A@@A@A@@@ABA@@A@AA@A@C@"],["@@A@@B@@@BB@BBBA@@BB@@@AB@@@@@B@@@B@@@B@B@@@@A@@@@A@@@AAA@A@@AA@@@@B@@@@@@@@@BAA@@A@A@"],["@@@@B@@BB@@@@B@@@@BB@@BAB@@B@@@@@BA@B@@BB@BA@@BA@@@AA@@@@@@A@@B@@@@A@@@@@A@@A@@@AB@@@@@A@@@@@@@@@@@A@@A@@@A@@@@@A@A@A@@@@@@B@@@@@@@@A@@@@B"],["@@A@@BA@BB@@B@B@B@@@B@@@B@B@@@B@@A@@@@B@@@@AA@@A@@@A@@A@@@AA@@A@AB@@@BA@@B@@A@@@@@"],["@@DBB@BADABA@ABC@AA@A@A@A@A@@@C@@@A@ABA@@AA@A@@@A@@BBB@B@@BB@@B@B@@BBB@@"],["@@@@@B@@@@@@B@@@@@@@B@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@A@@@"],["@@@@@BB@@@B@@@@@@@BA@@@@AAA@A@@B@@"],["@@@@@B@@B@@@@B@@@@@B@@@@B@@@B@@B@@BA@@@BB@B@@@@@@@B@B@B@@A@A@@@@BA@@@A@@AA@@@@AAA@@@C@ABC@CB"],["@@@B@@@B@@A@@@@@@B@@@@@@@B@@D@@@BA@@@@@A@@@AB@@@B@BA@A@@@AB@@@BAB@@@@@@A@@A@C@A@A@@B@BA@A@AB@B"],["@@BBBBD@B@B@@@BAB@@BB@B@@ABA@@@A@@BBB@D@B@DA@A@@A@@AA@@A@A@@@A@@AACBA@@@AA@A@@A@A@@DAB@@A@A@@A@@AAA@CBAD@BAF"],["@@C@A@AB@@BBD@FBB@B@B@@A@A@AB@@@B@@@@A@@B@B@BA@@@AAAA@A@@@A@C@@BAAA@AB@BA@A@@@A@BBBB@@@@@@"],["@@CB@B@B@BA@@BB@@@B@B@@AB@B@B@B@B@BAB@B@@A@@A@@@@AA@@@@@A@@@CAC@A@"],["@@@B@@@BB@B@B@B@BAB@B@@@BB@AB@@@DA@@@A@@@A@@CA@@@BA@@BA@A@@@@@AA@@@BA@@AA@@@@A@@@@A@C@A@@B@@BB@B"],["@@B@DB@@@@BB@BB@@@B@BBD@@A@@@@A@@A@@@@AAA@@@@A@AA@A@A@@@A@AAAB@@@B"],["@@@B@@DBB@B@@@DABA@A@@@@C@C@A@@B@@A@@@@@@@A@@@"],["@@AB@@@@B@@B@@F@B@D@@AB@AA@@A@A@A@@@A@@@@@ABAA@@@@"],["@@@B@D@@@B@BB@BBB@@@@A@@@A@@B@@A@@@A@@B@@@@A@@@@BB@@D@@@B@@A@@A@@A@@@A@@AA@@A@A@@@@B@@A@@@@@A@A@@@A@AB@@@@"],["@@BBB@D@BAB@@@B@AB@B@B@@B@BA@@BAB@@A@@@@B@B@B@BA@@@@AA@@@@@ABAB@B@B@@ABA@@@A@@A@AB@@@A@@@AA@@@@A@@AACB@A@@A@A@@BA@@@@AABA@@B@B@@@@ABABABABCBA@@@AB@@BB"],["@@D@B@@AB@B@DBDBBBBAB@AA@AA@@@@@@ABA@AA@AB@BA@@@@@@AAA@ACC@@@A@C@AAAC@A@ABA@CBABAB@@ABBB@B@@@B@BB@B@B@BB@@@BBB@@"],["@@@@@BBB@BB@@@B@@@B@@@BA@@@@AA@@A@@A@@@@@@A@@@A@@@A@"],["@@A@@B@@@B@@@B@@@@B@BBBA@@@A@@@A@@@@@@@A@@A@@@A@"],["@@@B@@@@B@@@B@@A@@A@@@@@A@@@@@"],["@@@@@A@@@A@@@@AA@@@@A@@@@@@B@@@@@@@@@@@B@@B@@B@@B@"],["@@LDHBH@B@@BB@D@DA@BB@B@@@B@D@B@@@@C@@GCCE@A@EBADED@D@D@DA@CA@@ABABAA@AAA@@ABCDABAAA@@A@A@@EAAA@AB@BABCBA@CAA@CDEBEHMPADCBCD@B@F@B"],["@@taPELA\\DPDJHHHNLPDL@NEHIHCJ@J@LCNCLCHKZgFIDCNGJMBG@I@CEGOKECAC@IDIFIDCHE@ACEOGcuEQFeBIFIHGRMLKDSCKEIGIEKI[CIAAG@MCGC[WOUAE@KAGFCACCACICG@IBEFCLCTCHCDCBE@EKQKQGUCOBSFGV@JANCTBHBH@JAHAFCF@BAAG@E@GACBCF@BCAA@AM@EBC@_OAABCACC@GBA@@A@EBCFKJUBE@C@ADA@AAAAAEaAG@CAAGAI@CBM@E@EAC@CCKECA@A@A@C@@P@H@FADCDGJKHEPI^ODE@EAAACA@CAC@C@A@@A@CBADADCDA@CFqAEAECCCCA@C@KCGECC@ADABBFAF@F@FA@A@CB@BACCCACACCCCEACEAIAG@K@GCGI@IEIEMDGBKDCBCF@DBN@HADe@QCEDCD@DBDPPDB@B@BCB@DEBIPCJGDI@IAMIIIMIKGO@SDOJORKHGDKDE@IEQCQDIFENQAfPbBHBF@HBFDLBFBJBHBDDHBDBFBLBDDJBFBBDDBBFBDDDBHDDBFDDBDDDF@DBD@FBBAB@BABAB@@EDEFEDC@C@A@IAEAA@A@A@@@GAI@A@GBK@GBEACBC@A@CAAA@AAAA@C@C@AAE@@JBD@FBF@F@FAD@@CFAD@BAD@D@D@F@DADA@CBAB@D@D@DDDBD@DDBDD@B@DADAB@BADABAB@BBBAD@D@D@B@BA@C@ABABCBC@A@ABAB@BCDABCBABCDAB@D@BBD@B@D@BAJAD@D@D@F@DDFBB@B@D@B@D@BCDABAD@@BDBD@BCDABCAAAAAAA@AA@AACBA@A@ABCBABCAA@A@ABCBA@C@AA@AACAE@A@AAA@AAAABC@ABC@ABABABCBABG@A@C@CBCBEBEDCBABADABABBF@DBB@DCBCBADABCDCDEBABCB@DAB@DABE@CBC@C@CDADC@CDCBADCDA@@ACCACAAEAC@E@C@EACBCBC@CBA@EAA@C@A@E@ADADAFAHADCFCBAFADAD@@ADBFBDBDDBBBFBD@BBPD^JPDNDNHHHLHFF@B@DEBQ@_BABC@DBDBHBHBDBFBF@FBH@H@F@HBHBHAH@DBFBFBFBFDHDFBHBHDJDDBHDFBFBHBDBJBFDBFFFDHJHDFDDDFBDDDFDDBFDFD@@DB@BB@BB@BB@DHHFFHFFFFFFHHHLFFLLFDNJ^RZRTT"],["@@FBDAH@F@FB@D@DA@CAABCBABEBAB@BFBD@DB@B@BABADABA@AB@DDDBADAB@BBAB@BC@A@@D@B@BDDDBDA@A@ABABAB@B@B@BAB@DBBA@AAABAB@BBBBB@DA@AAAACGC@A@@BAFCFC@AAAE@AA@AA@E@C@A@AA@C@EDCFCDAH@DDFBB@DC@A@@B@DBJDHBBA@AAAEEACACCECAABA@AAAEIEE@CBCAAB@DABA@@AAAA@A@@DAB@@A@C@A@@A@ADA@A@AC@A@@A@A@EACEAEBCF@BA@A@AAAA@CAAA@A@@B@BABA@@AA@@AABABAAAAAACBABBDDDDB@BAF@BB@B@BBADB@@D@@A@A@C@ADBD@BFBF@DC@A@@B@BBBDB@BA@@@B@BB@B@@BABA@A@A@@B@B@@"],["@@@A@@@AA@@AA@@@A@@B@@@BB@@@@@@@@B@@@@@@AB@@@@AB@@@@BBB@B@@@@A@@@@BA@@@@@@@A@@"],["@@@@@@@B@@B@@BB@@@@A@@@@B@@@AA@@@@A@@@@@A@@@"],["@@@B@@@BB@B@@@BA@A@A@@@@@@A@@@A@@BA@"],["@@ABA@@@@@B@@@B@@@@@B@@@B@B@B@BBB@@@BA@@@AA@@@@@A@@@A@@AA@@@@@A@AB@@A@@@"],["@@@B@D@DBBB@D@DBDBBABBD@@DD@DBBA@@BB@@BBB@@A@@B@BAF@@A@@AAA@AAA@A@AA@A@@@A@@@AA@C@@BC@AACA@A@@BCAAA@EAA@@B@B@BCBA@AAC@"],["@@B@@@B@B@@@B@@A@@AA@@A@A@A@@@@B@@@B@@"],["@@@@A@@BB@@@@B@@@@@@BB@BB@@@@@@@@A@@B@@@BA@@@A@@AA@@@@@AAB@@@@@@A@@@A@"],["@@CXBFBBFB`@V@F@HCFADAHGHIHA@C@ACAKBCBAABAB@AC@C@AB@H@FABCACCEE@C@@@AA@CB@D@BC@AECC@@A@@@AD@HA@CCEA@CB@@AA@@BC@@AAC@EDA@@@A@AAA@EDA@AB@BDB@BA@C@@B@DDB@BABC@E@C@CCAAAAA@ABADEFKLCBEFCB@F@BBF"],["@@A@@@@@@BB@@@@@B@@A@@@@@@@A@@A@@B"],["@@AB@@A@@B@B@BB@BB@A@@@A@@B@B@B@@A@@@AB@@@B@@AA@AAA@A@@@@@AB@@"],["@@@B@@B@@B@@@BB@D@BA@A@A@@@@@A@@B@@@@B@B@@@@@@B@B@@A@@B@@A@@@@@@@AA@@@@@@@@@@@@A@@@@BA@@@@A@@AB@@@A@@A@@A@@@@B@@AAB@AAA@@B@@@@A@@@@@@@A@@@A@@AA@@@A@@@ABBB@@BB@B@B@@ABA@@B@@B@"],["@@@BA@@BAB@BB@@@B@@A@@B@@@B@B@@@@@@A@@AC@@@@A@A@"]],"encodeOffsets":[[[124919,30343]],[[125115,30114]],[[124909,30037]],[[124949,29988]],[[124945,29748]],[[124827,29700]],[[125211,29579]],[[125188,29574]],[[125182,29574]],[[125165,29553]],[[125179,29557]],[[124935,30341]],[[124956,30333]],[[124928,30282]],[[124927,30270]],[[125014,30213]],[[124939,30213]],[[124904,30210]],[[124902,30198]],[[124909,30181]],[[125117,30168]],[[125137,30154]],[[125154,30166]],[[125164,30170]],[[125171,30169]],[[125188,30160]],[[125111,30112]],[[125126,30085]],[[125139,30093]],[[125156,30081]],[[124901,30112]],[[124930,30117]],[[124932,30047]],[[124914,29989]],[[124932,29998]],[[124957,29988]],[[124967,29981]],[[124966,29965]],[[124904,29933]],[[124912,29930]],[[124935,29937]],[[124992,29915]],[[124989,29905]],[[125015,29888]],[[125007,29890]],[[124879,29889]],[[124758,30365]],[[124955,29879]],[[124987,29829]],[[124963,29800]],[[124913,29784]],[[124953,29723]],[[124857,29733]],[[124769,29771]],[[124708,29771]],[[124714,29781]],[[124744,29734]],[[124730,29736]],[[125194,29580]],[[124854,30364]]]}},{"type":"Feature","id":"330281","properties":{"name":"余姚市","cp":[121.156294,30.045404],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AGAAACKQGIAC@AACAA@CDK@A@AAA@@ACAECEAA@AECKIAAAA@@A@CAC@ABC@ABIHA@@@@B@@DF@@@@ABCFAD@B@@A@C@IGCA@@A@A@C@A@A@E@@@A@@@@@@B@HBBAD@BA@@@@@AAA@CEA@@AA@AB@@@BBJAB@B@@IAC@@@CCEA@A@@AC@A@A@AA@A@CA@@A@@A@AAC@@@AB@@EBA@@A@AAA@A@E@C@CA@@EAAA@@A@C@C@A@E@MBA@A@A@A@CCCC@@CEAA@@AAC@CB@@AA@A@C@CA@@@AA@@@AC@GAA@AAAA@@@@@A@A@A@A@A@@@ACEEEAA@AAC@C@G@AAA@AAAAAECCECAA@AACAA@A@AAAEAACAGEQIECC@@AA@A@EBA@C@AAA@CAA@@@AAAC@CCKAA@A@AEAACACCECECEACAC@A@@@AB@BC@@BA@AAA@@A@CB@@@@A@A@CACCCAECCCCCCCAA@AA@@A@E@CB@BCDCB@@A@A@A@A@ECG@CAC@E@A@CBA@@@@B@DAD@B@BBDBB@@@B@@@DE@@@AGA@@@@@@@A@C@A@A@@@ABAD@HCB@@AB@F@B@DBB@DBBBHH@@BD@@AD@@B@BBB@B@@@@AFC@@A@AA@AB@@@B@@@B@B@DG@A@A@C@C@AAAAAA@C@CAE@@@C@CAA@ACA@CAA@@AA@AEAAAA@AAAC@C@@@@AAC@@AAA@@@C@A@A@AAECCAGEAAA@A@A@A@A@@@A@AAA@@AEMGK@@CCACA@CCGCCAA@A@AAA@A@A@AB@@A@ABEFIJILCB@@AB@@A@@AEEC@AAA@C@Q@CBA@@@A@AB@@ABADELCD@BA@@@C@C@A@A@@@A@ACA@@CACCC@CAC@IA@CCCACACCA@IAAAMEIEC@AAC@A@EBEBEBCBA@CAA@C@CBA@EBCBAB@@CFAD@@BD@@BBBBB@@@B@B@D@B@B@BBB@@@BBD@DAD@BBB@B@DDBB@@@D@B@@ABIFABAB@B@BBFBHBB@BB@FD@@D@@BBAB@NBFBHBFBBBBBBB@B@BABABEBGBA@C@IAA@@@ABABA@CFCD@BADAB@B@@BBHLBB@@@@BBB@@@H@@@BB@@FBBDB@@@@@BAFE@@B@@@B@@@BBBB@@@BABCFKTADAB@B@B@@BBDBFBDBB@D@B@RCD@BA@@DAHG@@BAB@B@B@BB@@BBFDBDDDD@PJDBFDBBBD@@@H@BB@@@@BD@HDB@@BDB@@BDBDBD@B@B@BB@BBBBLDBB@B@@@B@BAFCDABCFCDA@@@@BDJFFB@BB@B@DDFBD@BB@@DA@@@@BCDCBABA@EDC@A@C@A@@BCDCDABA@@@CBC@A@A@EAA@A@ABCBCDABAB@DABA@@BC@A@A@@@@@AA@E@AA@@@A@A@ABA@ADEDGFKJCBGDEDABA@@BA@@B@@BDBB@B@@@@A@C@CBAB@@CFEF@BADAB@BEF@@AB@@BBB@F@BBB@@B@@@B@@@B@DBBDBFJDBBB@B@B@B@@AB@B@D@BBDBBBBB@DBBBB@BFBDBFBB@LBJBD@D@H@F@B@@@@BB@@FBHD@BB@F@FBD@B@F@@@BABBB@@@DDDB@BFHB@@BB@@@F@@@B@B@BBFB@BBBBB@H@B@@DDBDBB@BBB@@A@ABCBGB@@CB@@@BAFAFEFCDCBEB@@EB@@ABE@@@A@A@AAA@@@@AE@A@ABC@CBA@@@A@@A@ACA@@@AAA@@@AA@A@@AC@A@CB@AA@@A@@ABABAB@DA@@@@B@@DB@B@BB@@B@@@@AB@@@@@B@@DFB@@B@@AB@@@@AB@@A@@A@@A@AAAA@@@AAB@@IAC@EAA@@@@@A@E@@@CB@@@@@@@BB@@@AB@@@@A@A@A@C@CBAB@B@@ABCB@BE@A@CBADKFAD@B@D@DBBB@BBEfGDA@@DABCDABCBC@ABCBGHCD@B@DBBDFBB@BA@ADADCDAFAFEDCDE@G@CECACB@@ADIHCFAFBH@BCFCDA@K@AB@BBBDBB@DDBBBBBDBFQl@FAD@@@@AFAHAF@H@DCBEHCFADAJAFAFELEJEJGNGNGPEHQ\\MVCFGPIPD@`JRbNH\\LxPTDRDLHFFTNDJLV\\m©BADCBEBEAAA@GCECCAECCCAEAC@A@@@A@AECGAKEGAGCCCEA@A@ABCBA@AD@FBHDbPHDDBF@B@@G@CB@BAB@B@DI@EBM@@@@@@BIDQBE@AEAE@AA@A@K@EAEBGDWH@DBBABABC@C@CAC@A@@BAN@DBD@D@@@DAPEL@H@BBBB@@@B@@@@@@BBJB~AR@B@@B@D@@BBF@PBNBJ@PCBKBGNIDC@CAEACGCEAE@C@@@AACGAECCCCGCC@AACCACECKAYAEEACAA@AFCHCDCBC@CAC@CFGDCBC@A@CCCJKBA@ABADBN@D@BAFGBCBADCFCBAF@LAF@FBDBBAB@@@B@@@@@B@@@B@B@B@@@@@HAD@@@@@BAB@@@B@@AB@BAB@BA@@@@B@DAB@@@B@@@B@@@@@@@@B@BBB@@@@@@BBV@B@@@B@B@@@FBB@BBB@BB@@FBB@D@HAH@X@FDF@J@HAH@FCLALCD@F@FDD@D@B@DAHEHCDAFAB@F@D@DBFDBBDBB@B@HADCD@DBB@@D@DBBBBB@B@@@DGBADADABBFBDBDBBBB@@@BC@CACEAECCACCAC@EDEDCFAJCDAFBD@DBDBAEBCBC@AAECAEACACAGAE@@@A@CACEACGIAGAA@ABAD@BA@ABAACCC@A@C@CBAD@B@B@@@@ECECGAA@C@@@@AAACAAA@@@@@AAA@A@ABCDAB@@A@A@@@A@A@@@AA@@AA@AAKAA@ABA@A@ADCBA@A@@AACCACAC@ACAA@@@A@C@A@C@@@AAEAICAA@@@@LGJAB@D@B@B@HDDB@@B@BAFADCB@"],"encodeOffsets":[[124304,30669]]}},{"type":"Feature","id":"330283","properties":{"name":"奉化区","cp":[121.41089,29.662348],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BD@D@B@B@@ABCBODC@A@A@@B@@@DBH@F@BBF@D@B@F@B@@@BBBDDFFBDB@@B@B@@@B@B@@A@A@CBA@ABABA@@BAB@@@BBD@B@BABAB@@B@@B@@DBD@BB@B@@@@ADAD@B@@@B@DBF@BBBHLBFDDBD@@@@@BABCBABGBA@CB@@@@A@@D@@@@@BCB@@@BBB@@@B@@B@HAB@@@BB@@@D@B@BDDB@BBD@@@B@@@BBBBBB@@@BABCL@D@B@@@B@@EBCB@BAB@@@BBBBD@@@@@@@BA@C@CA@@AAEAA@AAA@ABA@GFCB@BCBA@CBC@E@@@C@A@A@CAA@@@A@@@EDA@A@@@A@EAI@EACBA@EBCBA@EBGBC@EBIAA@CBA@A@AB@@ABAB@BAF@BAB@@CBCBABE@G@OBC@A@A@@@@BABBJ@D@BBB@BB@BBDB@@@F@@@BFD@B@@@@ABCF@BAD@B@@@F@@@@@@A@@@@@CAEA@@@@A@AD@@@@@@CA@@A@ABA@@B@@@@B@BBFBB@BB@@@@@BAD@B@B@B@@BB@@F@B@@B@@@@AH@BB@@@DA@@B@BB@@@@@@@B@@AB@B@@A@@@A@@@ABA@@@A@AA@@A@AB@BFJ@B@@@B@@@@ABABA@ABA@C@@@@@@BAF@BABABAB@BA@C@ABA@ADA@AB@@C@CA@@AAA@A@@@C@CDA@EDCBA@@@A@@BADABBB@B@HBJBH@DAJAD@@AB@BGFABCHKVCD@BA@CBABA@@@@@CAAA@JBD@DDDBD@DB@BDB@@@B@B@D@D@@@B@@ADCFKBCBA@@BAB@@@B@DAR@D@B@BBD@FF@BB@@@BA@@DAJKJIFEBAB@@@BAB@B@B@BBB@B@DBHDDDB@BDDD@@HLFN@BB@BBB@@@B@B@B@B@B@BBHFDBFDBBB@B@D@@@B@BB@@BD@B@@D@D@BB@BBBBBBFB@@BB@DBB@BDB@DBD@@@F@DBD@B@BBBB@B@D@D@B@BCHHDBB@@@@B@@@@ABCDCFIBEBABA@@B@@@B@B@BBRFD@BBD@B@@@B@DA@AB@B@@BB@BDBB@@B@@A@@DC@@@AB@BBBBDF@B@@B@@@B@BC@@B@@@B@DF@@@@B@@@DA@@B@@@B@BBJF@@B@@@B@@@BA@@BABCBC@A@@B@@@D@B@BA@@FC@@@@B@@@BBFBB@@@B@@@BC@@@AB@BBB@JBHDD@B@H@D@B@B@FAB@B@H@B@B@HA@@B@B@B@TFDBB@B@BAFABAB@B@B@B@B@@@BB@@@@BD@BB@BB@@DF@@B@@@@@DA@@B@B@DBB@@@@@FA@@B@@B@@DD@BB@@@B@@AFE@@B@B@BBB@DB@@B@B@BAFC@@BAB@D@@BDBB@@@@@DAB@@@@@@@@B@D@@@@B@H@D@B@@@@@BB@@DF@BBB@@B@@@BBF@BAHAD@HAD@D@DAB@DBB@BBBD@B@BADADADBB@@BB@BB@@@B@B@D@B@B@BB@@@B@B@D@BBF@D@@@D@B@@@B@@@@BBB@D@B@B@D@B@D@B@@@DAB@@BB@@BBB@B@B@B@@AB@@ABC@ABA@ABABAB@B@BBB@BB@BBB@B@BBBAB@BABABE@ABA@ABABAB@BB@BDJBB@BB@@@B@@@B@@@@A@@BA@CAI@E@A@A@CJQBADC@I@ABC@G@C@I@K@C@C@E@@BE@CBC@A@C@CBEBABADAB@DCFADAB@D@H@H@F@@BB@HBF@JBFBH@H@H@HAFABADCBADAB@B@@AB@FAJAH@H@DAB@BADAD@FBF@B@DABABCBEAIAACCCCAAAA@A@CACACCECAACAC@AAC@CAA@C@A@A@EACACAA@CBEBADADAB@BC@ABABAF@D@D@DADCDAD@BABA@AAC@AFEF@F@DAF@DBDBBBDB@BBDDBF@FBDDFBBDD@DBD@D@DCDABCHGDADADCDCFADBFAD@F@DBHBFBFBDBDDDFDBFDDAH@BBF@FBD@D@BAFAJEHBBBBBBBB@D@D@FBF@D@D@J@HAD@F@DAFAFBF@F@D@BABC@AFADCB@VMPIEEGKGGEEEEEEEGGECGA@@AAAA@@ACA@@ECECCAECCCACCECCCEIGCGEEAEECIACAGAEAEAGCCAICGCGAEAGCECEAEAEACAG@GBGAGAE@G@G@EAE@EACAGAGACACAA@CAE@MAG@EACACCCCCAECECCCCACACEECC@EAG@E@EBGBCBGBGBO@G@G@K@I@EAE@GBC@A@M@C@K@ABA@CB@@CBAB@@CHABCDCBCBC@GB@@ABADOHCBA@ABA@C@A@@@AAAC@A@A@AA@AA@@@@A@GAG@E@AAA@EEA@AA@@CB@@A@CDCDCDEH@BA@@BGBABA@C@C@ABA@E@A@@@@@AA@C@ABA@A@@AAACCAGG@@AACCCEACEEACAA@A@CAC@@@AAAECA@A@EAG@E@A@C@ABA@ABCB@@CDABCDA@CBC@@@C@A@C@A@@BABEDA@ABA@@@@A@@AA@C@C@AAAKEGECA@AAA@ACE@AA@@AE@CA@@AAAA@@A@A@C@A@EBABCBGDCBABAAA@@A@ACG@@@@CCGGECCCACCC@CAA@ABABCB@@@@C@C@A@AAACCACA@ACEAAAAA@AACACAC@CCCACACCK@@AA@@AAIECCAAA@EAE@CAA@GB"],"encodeOffsets":[[124138,30113]]}},{"type":"Feature","id":"330282","properties":{"name":"慈溪市","cp":[121.248052,30.177142],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DCÈn[XCdBbL^HdE`STQho¶pelk~~hRkNULKQG@AGGEKEGCGACACECGEA@C@C@E@E@MCG@G@CBEBEBGBEDCD@@@B@@ABAB@@@@@B@@@@A@@BA@ABA@A@A@ABA@A@@@AB@@@@A@@@@@@@@B@B@@A@@@A@@@A@A@@@AA@@A@@@@@A@A@A@@@A@AAA@A@@@A@@@ABA@@@A@@A@@A@@B@@AB@@@@@@A@@@AAA@A@@@@BAB@DABA@@@EAG@E@EACAAACCIAEAGB@@@A@@@@@@AC@AAAB@@CB@@A@@A@@ACAEAEB@@E@A@@B@B@DB@@B@D@B@@@B@@@B@B@@AB@@ABA@@@E@G@AACCYEC@EAA@A@ABABEBG@CCA@@AGAC@E@A@CACACACAC@EACBIDEBCDCF@FBDDDDBFDFBBD@DAD@@A@AACACAEAAACBCBABCH@@A@A@AAAA@C@CA@CAC@CDGBA@A@CAAAECCAC@E@A@EBCBGDGFCBA@C@C@ECE@C@KDKBEDG@GBI@E@ECW@G@GBC@A@EA@@AAA@AAA@EA@@A@A@@@A@U@AA@@@@@@AA@A@A@@@@@@A@@@A@@@A@CBA@@@@@ABA@ABA@@BA@@@A@AB@@@@C@GB@@@@A@A@A@@@A@@@@@A@@@A@ABCAEAE@KBE@ABEDCDABADEHABC@M@CAAB@BABILDD@D@BADCDEH@DBD@DADCDGDED@BBBBDFFZBLBFDBDDDBBD@HDDDDDBFDHBB@@D@F@FBHDBDBF@DCDMJAHALODI@MAOAE@AA@@@C@AA@Q@}BIAAA@@@@@@@A@@AAAAG@K@OFCB@@C@C@CAM@AB@@@BBD@D@DADABABCAG@CXAHBF@F@L@BBBF@FB@BAFCRAJ@@@@@@AN@FCJA@A@ABA@@D@HA@E@CAGCaOGCEAC@@BABAD@B@BFBDDHDHBLFHBFD@B@B@@@BBDBFDDFDDBFDHDB@BBAFAFCDABª[nLP\\`xjpX\\HDrTPD"],"encodeOffsets":[[124090,31167]]}}],"UTF8Encoding":true});}));