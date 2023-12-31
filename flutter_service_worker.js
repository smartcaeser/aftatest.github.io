'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b63240f83f4aff5f777a79544681851a",
"assets/AssetManifest.json": "fe50dfe375fda9e06d6d76b334ee4927",
"assets/assets/animations/success.json": "a6e8bcd9d89b26e9919a49ab944d22ce",
"assets/assets/flags/ad.png": "1aacf693aed2acfe02e61661bb1d15ca",
"assets/assets/flags/ae.png": "f0a95f247aa9ed04e8b8078fab47d116",
"assets/assets/flags/af.png": "660f122fdb9e6eee8c23ce283e6c436e",
"assets/assets/flags/ag.png": "a91460a442335d76faaaeb8d97fd27bf",
"assets/assets/flags/ai.png": "9ad8f6fbd2dfffc221ddc86157be356f",
"assets/assets/flags/al.png": "1bf7583a605aa5330ef94c112e5bf9df",
"assets/assets/flags/am.png": "ebf44c9104fdcdc5cafb4ce952a54d59",
"assets/assets/flags/an.png": "f631f7f4261fef69ab47a15437b819e9",
"assets/assets/flags/ao.png": "2a02b1dab7b7eef4600bde31e20d656d",
"assets/assets/flags/aq.png": "7f7fa7af21fc3dc4a3860fb1af8c4117",
"assets/assets/flags/ar.png": "11c38bd60820e7c52352db376cdcfce9",
"assets/assets/flags/as.png": "4fd332ffc9a2faf834357487f1d93e29",
"assets/assets/flags/at.png": "608769b0492b16839f9f3e368ea32990",
"assets/assets/flags/au.png": "3dbb2351f8350ef5624c6e1997d9b10e",
"assets/assets/flags/aw.png": "17d573958530d3787d85839f4e19ef56",
"assets/assets/flags/ax.png": "1db33dac4ca169fbb04ff422fe3b32fe",
"assets/assets/flags/az.png": "3422a1d417a2a13abfffaa0ab851c48e",
"assets/assets/flags/ba.png": "80ddc6e6f02020d84c657b5d86ff7684",
"assets/assets/flags/bb.png": "482aba486df393337e7ca37e1809b34a",
"assets/assets/flags/bd.png": "2f4a6ef7a097f677d795ccf42e2a2f11",
"assets/assets/flags/be.png": "d7452c934da368ce542b49037a4226fb",
"assets/assets/flags/bf.png": "6a7837fbb20d1d707edac18a772d0aca",
"assets/assets/flags/bg.png": "a79a31dba572a83d51619b257523ea43",
"assets/assets/flags/bh.png": "d0442fb0b456d43e267eedc5e5a1cd09",
"assets/assets/flags/bi.png": "542666e31144f9dcc5f33747354920f8",
"assets/assets/flags/bj.png": "ecb4f0778612d76a3b2d587a48e6ebd1",
"assets/assets/flags/bl.png": "188d496b200dca60e47c87b852fc89b0",
"assets/assets/flags/bm.png": "7fcfe44364e7b13bc9bb6b1d38e67b44",
"assets/assets/flags/bn.png": "3a12f43c65ad152d9fdeb237aa04af3a",
"assets/assets/flags/bo.png": "1cf2bc64d508f720372a608f9e47b9bb",
"assets/assets/flags/bq.png": "46b0d4835c3c23c0a8d4ef9f55db2b06",
"assets/assets/flags/br.png": "ae1749ed87f9a3afca2851247d4546cc",
"assets/assets/flags/bs.png": "4dbfd7a2c196208ce15de6079cacc9cc",
"assets/assets/flags/bt.png": "79013c2037a8dbe805c608a6fca4b334",
"assets/assets/flags/bv.png": "ef598a9fd443a87e16d0bfe79ee38cdf",
"assets/assets/flags/bw.png": "d2e74d89d909ad4a25a9c5717de2f7dc",
"assets/assets/flags/by.png": "7eb8aca4382b94d17d531ecc675cc4ba",
"assets/assets/flags/bz.png": "a01fc77bbf3d59b7589879f8dd211912",
"assets/assets/flags/ca.png": "65f9c9629bfe9e4923815813e5431efd",
"assets/assets/flags/cc.png": "9d7c8bcf3cdc767a7f31426ee30dab60",
"assets/assets/flags/cd.png": "e8f2cea779ce872d08201597b02c597f",
"assets/assets/flags/cf.png": "45617cf482d8526b23147bc78d00f50d",
"assets/assets/flags/cg.png": "03fd398d46ee2e45771139ba34595da7",
"assets/assets/flags/ch.png": "ad15a9e9baeabdbb949c694398368e4e",
"assets/assets/flags/ci.png": "f891481b6d8919fc50cc43e1dec24263",
"assets/assets/flags/ck.png": "1b007eb85531f253b2ec15e958e3056f",
"assets/assets/flags/cl.png": "83b1b9005caef41c7fd2a6384e4927db",
"assets/assets/flags/cm.png": "f6e9475b28d20bcc3123dd5d0cca3279",
"assets/assets/flags/cn.png": "453d855f70ef7b89fac99895773f2535",
"assets/assets/flags/co.png": "61fa6d5907dedb1dbaa58b7517daad30",
"assets/assets/flags/cr.png": "2048f5b6386d9e67512a6779d5d82128",
"assets/assets/flags/cu.png": "ac8319acc61b156f7bdb253c3a04c616",
"assets/assets/flags/cv.png": "b25db20c51c841b496c8668bb5b4d1cf",
"assets/assets/flags/cw.png": "c4c1ed5b99f70096e8338a8772069446",
"assets/assets/flags/cx.png": "6d279739de88c345f3e31c124e018c84",
"assets/assets/flags/cy.png": "dae1d011d2a55114add74dc0bde56400",
"assets/assets/flags/cz.png": "bec7038212c7d05c88b6b22f41ef2630",
"assets/assets/flags/de.png": "c0d0800fa9091a0e8830d78a29e4091a",
"assets/assets/flags/dj.png": "12e894c0ced52efd15dfca315a16f33b",
"assets/assets/flags/dk.png": "4809c56e7a1f204328e43339f6f84db5",
"assets/assets/flags/dm.png": "4773d4707ada9bb01e74f206fc17abbe",
"assets/assets/flags/do.png": "0a1041d6a0498bc11b52fca93c083156",
"assets/assets/flags/dz.png": "9d64cd78c49a15008cbe8652b231798d",
"assets/assets/flags/ec.png": "3f59e5070153ea5efe7da4561d311aa8",
"assets/assets/flags/ee.png": "1090c5cd1d6edac56ea172b63e298b15",
"assets/assets/flags/eg.png": "163974b6e28267d22bb86eb53de4be63",
"assets/assets/flags/eh.png": "ba5d85e8e5e77a03c44f70a912191789",
"assets/assets/flags/er.png": "d830edf23589c5ddc068cc70a0e19249",
"assets/assets/flags/es.png": "075c30fd313b802b80b34687e554cf4f",
"assets/assets/flags/et.png": "e914d5910342f9356198084b624c260d",
"assets/assets/flags/eu.png": "9071dd73d728d00cd9d28ddc41332275",
"assets/assets/flags/fi.png": "13e2f1188d79003d314353820122fc17",
"assets/assets/flags/fj.png": "038d2866c0d421dedc3ec8a3a08d81e7",
"assets/assets/flags/fk.png": "e17b4125fce77340c33ea23960382280",
"assets/assets/flags/fm.png": "3ca2968179d1119db38353ef014a6196",
"assets/assets/flags/fo.png": "a0ce3561039b6741bf8a4e38ec92f2a8",
"assets/assets/flags/fr.png": "02aea38f9e516467efca62ca26b7046e",
"assets/assets/flags/ga.png": "488e48ef9feb3c76d911a043deee71b8",
"assets/assets/flags/gb-eng.png": "7ad705e446f51de6798a3cd931c678cf",
"assets/assets/flags/gb-nir.png": "4f3d96e67f55b5b8495ff9d104c6872d",
"assets/assets/flags/gb-sct.png": "5dc90d9a83c3de79746d0bea814bf645",
"assets/assets/flags/gb-wls.png": "a52fc5da481dc1861efd0056b671bea2",
"assets/assets/flags/gb.png": "4f3d96e67f55b5b8495ff9d104c6872d",
"assets/assets/flags/gd.png": "ef641ce8a296a00174e6302b80f7b8bb",
"assets/assets/flags/ge.png": "a3f4ed852dc2d31c6e00a26c4e43a9ab",
"assets/assets/flags/gf.png": "fba33680ae29a3a37d31133809441d62",
"assets/assets/flags/gg.png": "486cde076860a1b735e44959cb22afa3",
"assets/assets/flags/gh.png": "0e83b81570c011ee260e9404309369bd",
"assets/assets/flags/gi.png": "02ec1f60b6633c4aa5b5577a6e1208e7",
"assets/assets/flags/gl.png": "0bf006d770eb8525708867a301765a95",
"assets/assets/flags/gm.png": "e5d632aed932e81f47eecc98de383ec0",
"assets/assets/flags/gn.png": "ee4e661f9d5204573dd544c8843a0bb8",
"assets/assets/flags/gp.png": "1f51e1cf368860492305e56573dc6013",
"assets/assets/flags/gq.png": "508308fd6a78dea099ec2f729985099a",
"assets/assets/flags/gr.png": "b67f77b18d764959666ab02333f7f661",
"assets/assets/flags/gs.png": "1556a6cb1f75a23f0593a58bc30989b5",
"assets/assets/flags/gt.png": "d1a8528dc7ad9490290b2e99a2f2d9af",
"assets/assets/flags/gu.png": "0760912df59b966b2f5dcd1bacd2630b",
"assets/assets/flags/gw.png": "57a0a4704b45fc701e5b8574241b474e",
"assets/assets/flags/gy.png": "d9ac767c16b5d3a2ccd303b6bfc9a202",
"assets/assets/flags/hk.png": "e25e7660ae9e5739632077c31b891d69",
"assets/assets/flags/hm.png": "3dbb2351f8350ef5624c6e1997d9b10e",
"assets/assets/flags/hn.png": "92fe9380f7dbf95783060b134511084b",
"assets/assets/flags/hr.png": "9a720e9dd52033270f9f1017cfba3bce",
"assets/assets/flags/ht.png": "0dbee740251a8fb814a055fedf859188",
"assets/assets/flags/hu.png": "0b4115c034ece729b7119ab4e3f4bb39",
"assets/assets/flags/id.png": "155344cb61fa85ff8680fe44a0c40515",
"assets/assets/flags/ie.png": "7ecceecab6cca823f88cef2cc6f6cece",
"assets/assets/flags/il.png": "75608d293f7e1b0b12b17d950b8f918b",
"assets/assets/flags/im.png": "b39b706ce090a11b45f199faee9a1536",
"assets/assets/flags/in.png": "c40656915e40b8697d755adf12d67775",
"assets/assets/flags/io.png": "696f3b4e093ed2f50057035e71d87652",
"assets/assets/flags/iq.png": "9319b4faa07fa82efd33d33ea496e174",
"assets/assets/flags/ir.png": "55b4c27ee8268c0e4d23a11028a02777",
"assets/assets/flags/is.png": "67050355a791ebfdbd1ee963b5130073",
"assets/assets/flags/it.png": "3e556834b2a2bd13043fc750f2134261",
"assets/assets/flags/je.png": "cccc2aa2d3d99a8dccb68785f99139eb",
"assets/assets/flags/jm.png": "f52bd4a303b158adc13398edad699d8f",
"assets/assets/flags/jo.png": "aad9bc74c2a920f7c84e5cfe3a762fde",
"assets/assets/flags/jp.png": "6f0b04f379cdc6cc8729e45a76f45290",
"assets/assets/flags/ke.png": "a8ab4857f02900810cfcf76a2f3b44e2",
"assets/assets/flags/kg.png": "52299a932b7d90ea7ae217ee20b90a53",
"assets/assets/flags/kh.png": "672d4f09957d1bf2fe8f425c3e330233",
"assets/assets/flags/ki.png": "acc84e8f81d0d523ef834cb4b5e0780a",
"assets/assets/flags/km.png": "5ac2d15931b9c633bb081adbceaee663",
"assets/assets/flags/kn.png": "7553a352430f9740a081151c3ab089eb",
"assets/assets/flags/kp.png": "6170ee90cf354cd114e7f4eb99896700",
"assets/assets/flags/kr.png": "1fb2e249ed60a470219a00366d7f147d",
"assets/assets/flags/kw.png": "072729cd962f32af330d7b151b15a138",
"assets/assets/flags/ky.png": "5e2507311516d33660dbba97c489813d",
"assets/assets/flags/kz.png": "fca455cb0b4a07700a536999108aa073",
"assets/assets/flags/la.png": "7bcfbc9eaf2567e0938499da1fa8ef0b",
"assets/assets/flags/lb.png": "c8b9c19874f273e635bc49de92831fb5",
"assets/assets/flags/lc.png": "b780e4dfafbb6b834bc6e57248c0aacc",
"assets/assets/flags/li.png": "3a5673239686961098d67637847e4c01",
"assets/assets/flags/lk.png": "5ca339d7f63b878f1f8b82d43cf9aacf",
"assets/assets/flags/lr.png": "744134e9ed215c287316f31c9ecb3fed",
"assets/assets/flags/ls.png": "9e8c59af7733d1254452483c8ca4dfa3",
"assets/assets/flags/lt.png": "adebbfcb4e666ae83c420572568491eb",
"assets/assets/flags/lu.png": "e938221063036026b204215c622226c3",
"assets/assets/flags/lv.png": "1c8de39890043c6b6c3ac9192965ecfc",
"assets/assets/flags/ly.png": "f19e77eaf524cb9af57108b60cd3b47d",
"assets/assets/flags/ma.png": "7023a10ba108e7e3d1904214249025e4",
"assets/assets/flags/mc.png": "8686af5cf0dba090f9e8b3bf3db68c6b",
"assets/assets/flags/md.png": "ab816594f9e3e91424526f8fbbed344b",
"assets/assets/flags/me.png": "5f20ad5680a7bd5979d68363f7c989bb",
"assets/assets/flags/mf.png": "1f51e1cf368860492305e56573dc6013",
"assets/assets/flags/mg.png": "36a09154b828ca93ef19cd370d3851ff",
"assets/assets/flags/mh.png": "5d44d2d6bc8ef667daaab82c431ca023",
"assets/assets/flags/mk.png": "72c60ba396e6ef68402fd4314fba82be",
"assets/assets/flags/ml.png": "95ab1e6fbcf0b539ad91dac85dd78048",
"assets/assets/flags/mm.png": "b33e771bcb7cb6e8bc67814491b5077d",
"assets/assets/flags/mn.png": "7dc35bfb7e8e96d0fc3c30eb008a091a",
"assets/assets/flags/mo.png": "3a6d8bece521864cb37d489c37f1633e",
"assets/assets/flags/mp.png": "614bfa3bf97f77850cb0233c08e53db2",
"assets/assets/flags/mq.png": "276e66e5e2a76f1e4fdeab5e523c5300",
"assets/assets/flags/mr.png": "84a0f7bcdcacf970bfaa8fd7c2f4c1d2",
"assets/assets/flags/ms.png": "607f3f0880bbf0a72585919d1c8852cf",
"assets/assets/flags/mt.png": "ee5f0e8bf7aa9c609c71b0539baf2fcb",
"assets/assets/flags/mu.png": "756616702622933b34b893646f7cd0eb",
"assets/assets/flags/mv.png": "ff967b27286b888952220588dc0d33c3",
"assets/assets/flags/mw.png": "bede1e29f44deb775d43916acb5300b4",
"assets/assets/flags/mx.png": "ff34b81849b3cbfbc162ae60b79bcdfc",
"assets/assets/flags/my.png": "4790d277bd7b03b793c9c8a54d0db16c",
"assets/assets/flags/mz.png": "41bada1d37528a6aa55b407ae956a815",
"assets/assets/flags/na.png": "90a4627e0c4b8624d2ca0422d44f0905",
"assets/assets/flags/nc.png": "27fd7db92e8e95f7f40d551cbea09a85",
"assets/assets/flags/ne.png": "f283f366eae7933f199f21c386ab2bd5",
"assets/assets/flags/nf.png": "591a33bd418e460020b80a1727917ab5",
"assets/assets/flags/ng.png": "1beb46365517bf1d99b1d5b730db108b",
"assets/assets/flags/ni.png": "e608db7e1cecd6afbd1420dd65def4b0",
"assets/assets/flags/nl.png": "46b0d4835c3c23c0a8d4ef9f55db2b06",
"assets/assets/flags/no.png": "ef598a9fd443a87e16d0bfe79ee38cdf",
"assets/assets/flags/np.png": "6e91204f10b316cd7cd94a847f294fe9",
"assets/assets/flags/nr.png": "acdf572d1e7621435a326b42d7ad7eae",
"assets/assets/flags/nu.png": "444e791cfb272edeb705a95f83185191",
"assets/assets/flags/nz.png": "8653747503cf69d01f4caca15955868a",
"assets/assets/flags/om.png": "a73a7059c9c05355bdb07671556c2abe",
"assets/assets/flags/pa.png": "368848b034d627f51011bee7ff6f7fe1",
"assets/assets/flags/pe.png": "781b81b1ba1d5f9c6409abb4d3c84333",
"assets/assets/flags/pf.png": "c24b43b17213fa4bf710cce0a5666cb9",
"assets/assets/flags/pg.png": "64e4dab43ebe44ec9c660f865b83cdd5",
"assets/assets/flags/ph.png": "f7d9f8ca1f2f42be3fc16541d8f23f29",
"assets/assets/flags/pk.png": "1b66722e1c4f02f3377ec8f2a61c10bf",
"assets/assets/flags/pl.png": "59b66c03277d662094a5deba6745e448",
"assets/assets/flags/pm.png": "1f51e1cf368860492305e56573dc6013",
"assets/assets/flags/pn.png": "1b483de59d98dbab49af3a2a818f567c",
"assets/assets/flags/pr.png": "4c013d5006b46b1b1f3371ee10f896cd",
"assets/assets/flags/ps.png": "01f934c2da8a4d7f75392b6ff251d0f1",
"assets/assets/flags/pt.png": "f9a2dd01d695901f6d5df9786fb94b28",
"assets/assets/flags/pw.png": "3fe5f5ac165f4d7a11847fa58323ebe3",
"assets/assets/flags/py.png": "b1f3a3e40b9f3bff417d959b3a6e3b79",
"assets/assets/flags/qa.png": "35de25a58f356e13ac87e140cfc80bb3",
"assets/assets/flags/re.png": "1f51e1cf368860492305e56573dc6013",
"assets/assets/flags/ro.png": "aeeaef3e507b62f710359e3976b574ce",
"assets/assets/flags/rs.png": "fe38b3c35c08ceb4ffe5372f51112bd0",
"assets/assets/flags/ru.png": "4fcf2660173f696388dea92667de164a",
"assets/assets/flags/rw.png": "1ef7abcf069ef349ad94739a5632a38b",
"assets/assets/flags/sa.png": "4860952974607dd9df1e7abf159551d9",
"assets/assets/flags/sb.png": "69cf6fb36fda272ff52a4c913f170871",
"assets/assets/flags/sc.png": "86322180a7157d640433b5541ef1cea2",
"assets/assets/flags/sd.png": "c4ebfd8e408c64752171ed332ecaf84d",
"assets/assets/flags/se.png": "d64ec3de57b785c23f588bd3083e538c",
"assets/assets/flags/sg.png": "c922d92eccf8c8f495a1015179dcc026",
"assets/assets/flags/sh.png": "4f3d96e67f55b5b8495ff9d104c6872d",
"assets/assets/flags/si.png": "c428d79ab05873b881c7851210aa5f29",
"assets/assets/flags/sj.png": "ef598a9fd443a87e16d0bfe79ee38cdf",
"assets/assets/flags/sk.png": "87b04462076cf5a131437ffd5806772c",
"assets/assets/flags/sl.png": "aa42873d1b3b7097d5bf5394fd7db249",
"assets/assets/flags/sm.png": "bb92ccdf55b3e911b4dbd1ad323025b8",
"assets/assets/flags/sn.png": "b44808bac0e786e330e2d1ff70fc8661",
"assets/assets/flags/so.png": "2fb38d1f81d22648e9fb09fe84889f17",
"assets/assets/flags/sr.png": "70e657e4b1dc16e0d0671b857d391e40",
"assets/assets/flags/ss.png": "a35ee2f46bb2775ae97a6243bf488314",
"assets/assets/flags/st.png": "73e8c89284ebadf4b92ac3cd9d262c72",
"assets/assets/flags/sv.png": "cffaa7e9fce1e1b9ff8e9e410d504ebe",
"assets/assets/flags/sx.png": "bc6ff957c83ce667c8fd182d98a3a089",
"assets/assets/flags/sy.png": "4bdfb178d0b5c37d1a49447644810642",
"assets/assets/flags/sz.png": "06062677a5d2cbaab9a38e262ff41484",
"assets/assets/flags/tc.png": "3d9368fce5092fa8c7b7f01bee735532",
"assets/assets/flags/td.png": "af99aa9d657ede1ad49ecbb791f26c75",
"assets/assets/flags/tf.png": "75f7175a0a8f2a93d966827f868e78d2",
"assets/assets/flags/tg.png": "1aac75adea3d024d892392e9fb521c83",
"assets/assets/flags/th.png": "26c730c4f3d8990011d72b62cefedff7",
"assets/assets/flags/tj.png": "15af71069779d3b0509ffee9251f9588",
"assets/assets/flags/tk.png": "c2b01fb241c3376142db12a5ca21d75f",
"assets/assets/flags/tl.png": "03331ba7e3de6f6e56c7a8e427df9757",
"assets/assets/flags/tm.png": "587e852cf79984b2874546d9cbdf339d",
"assets/assets/flags/tn.png": "76073847b409dccabe9c1eda3ac05f91",
"assets/assets/flags/to.png": "5ff2d5324888c0836390dec09203b038",
"assets/assets/flags/tr.png": "29bd4d66e8e156e4daea96ae1673c951",
"assets/assets/flags/tt.png": "90abc818ecfb2f718a8c20fdb9c99de6",
"assets/assets/flags/tv.png": "84a68e470361631eb793ace8cbfe88cd",
"assets/assets/flags/tw.png": "445e9d2c92a405aaa57b4c62174d0a70",
"assets/assets/flags/tz.png": "c7beca272acad189bdc2aa6a1d6d52c8",
"assets/assets/flags/ua.png": "df5f575fc7266ae93ce527ad3703b7af",
"assets/assets/flags/ug.png": "a78b050a73b54f4fe97efda12e6db1f1",
"assets/assets/flags/um.png": "d954766c5bb2a1c6b89f1371aba07b4c",
"assets/assets/flags/us.png": "d954766c5bb2a1c6b89f1371aba07b4c",
"assets/assets/flags/uy.png": "afc590e6c5e6ec044e854a94aa5c641f",
"assets/assets/flags/uz.png": "09314fdd69b5f2f807f34849ab7e58fd",
"assets/assets/flags/va.png": "d4076a8fe13f708cb048cf59b2211672",
"assets/assets/flags/vc.png": "b2cd5b4716ce8788fa15a4d26ae68e86",
"assets/assets/flags/ve.png": "1143cb8025ec96e7caca26785962d518",
"assets/assets/flags/vg.png": "cec52738e3c09558332834ed435c9843",
"assets/assets/flags/vi.png": "8d9b59da5f89e37d023b1d98eaf3bd57",
"assets/assets/flags/vn.png": "0c15d40ac47d92791edac77ce8a9ef01",
"assets/assets/flags/vu.png": "1f3f683c41e68e68ca1e8532826f2238",
"assets/assets/flags/wf.png": "b7e46678b1f20fd6bc752a0fb34f492e",
"assets/assets/flags/ws.png": "d3a893789296b0caddb296f6de923bf0",
"assets/assets/flags/xk.png": "b945091e2392a5e0947fd034de30ffb6",
"assets/assets/flags/ye.png": "103e45a7c439a078ba088fadd20d9405",
"assets/assets/flags/yt.png": "1f51e1cf368860492305e56573dc6013",
"assets/assets/flags/za.png": "6d7ebb91ce1fddfabf57176255d332af",
"assets/assets/flags/zm.png": "8928cebab223c02f5bac81a969e898eb",
"assets/assets/flags/zw.png": "9a81708fa126804fdd75bdcac6cb390f",
"assets/assets/icons/add_icon.svg": "7d24acf639feeed46c52c181e29599ef",
"assets/assets/icons/admin_articles_icon.svg": "9dea796296a7cd8ddb79538bfbdf0e3b",
"assets/assets/icons/admin_clients_icon.svg": "313b4f612c3bb3911700f1f80a53db8a",
"assets/assets/icons/admin_consultancy_icon.svg": "9dca109d640e010cf4bd1d614b9b4455",
"assets/assets/icons/admin_financial_icon.svg": "fda776b20dfb05267817c3f3ae7c5a8e",
"assets/assets/icons/admin_gear_icon.svg": "39751268bc3d27826a194c3792ee5265",
"assets/assets/icons/admin_home_icon.svg": "96e8abf58ec8f774d58b42bfb6c6b6fa",
"assets/assets/icons/admin_notification_icon.svg": "6c2611f91d9145721dac2e36e8a7bfb9",
"assets/assets/icons/admin_orders_icon.svg": "a293626192722afd91508a4ad2536d5b",
"assets/assets/icons/admin_providers_icon.svg": "a293626192722afd91508a4ad2536d5b",
"assets/assets/icons/admin_reports_icon.svg": "549fcb225c2ae725e26b63c60d6795c9",
"assets/assets/icons/admin_services_icon.svg": "c2f10554bf40ff7ac6b4bfb8c4acc145",
"assets/assets/icons/admin_signout_icon.svg": "d15b12ed7ba961c974237b0a364a9799",
"assets/assets/icons/admin_tickets_icon.svg": "ebdf5923576f7a0cd4e3f3a6718186da",
"assets/assets/icons/arrow_icon.svg": "aeb2160a80038483b058daf7e82e0d92",
"assets/assets/icons/at_icon.svg": "e692e51f8355874bd127d1d83d64e8e8",
"assets/assets/icons/calendar_icon.svg": "c47a00ce997e5504bca8e83663a8d2cc",
"assets/assets/icons/card_avarage_consultancy.svg": "5c5c139857ff669258083e9b8a82332f",
"assets/assets/icons/card_cancel_consultancy.svg": "b202ce89e0e599b75a86e5bec4b6c552",
"assets/assets/icons/card_cancel_order.svg": "ed97e7aec97d405cce7b67620d609854",
"assets/assets/icons/card_complete_consultancy.svg": "299792bd57fbab1fa6232cf331fb5e06",
"assets/assets/icons/card_complete_order.svg": "230d2fd0c637a12e7c4f0f7edd5f26bf",
"assets/assets/icons/card_consultancy.svg": "cadfc6edc00f683877d46a30fc779fce",
"assets/assets/icons/card_inprogress_consultancy.svg": "ae7ae9e0921a492dca495e8670693220",
"assets/assets/icons/card_inprogress_order.svg": "2d09d119011c8c498215d71d7c1e6cb7",
"assets/assets/icons/card_new_consultancy.svg": "04c0fac3bcf73cc8c29020c8bdaed2b6",
"assets/assets/icons/card_new_order.svg": "2e846c516b43e8e53bcbc9b2beeb2349",
"assets/assets/icons/card_ticket.svg": "320acec25e5be0b8623916ed012aa912",
"assets/assets/icons/case_icon.svg": "042879e7aae9b35369fcb248764aa9a2",
"assets/assets/icons/delete_icon.svg": "0c25f0e61811631fd8bb825fe54e2778",
"assets/assets/icons/edit_icon.svg": "d981fb6c3f76f16b5ba461e731c03ce4",
"assets/assets/icons/email.svg": "5164fa2b93b72841c2d9ea543a0c0aa7",
"assets/assets/icons/eye.svg": "ab47d9acd8f5ca27aa5dbb4423d552d1",
"assets/assets/icons/filter_icon.svg": "2cd4111150febdb2a72e67bdae9461f7",
"assets/assets/icons/lock.svg": "23d7b1e5562b250ac73f5f79024155f8",
"assets/assets/icons/lockeye.svg": "1edf3b00d67891993de476d1a7540d97",
"assets/assets/icons/notification_invoice.svg": "64dba23e65ba140852ca32cf8769bce5",
"assets/assets/icons/notification_order_message.svg": "842b22842045e502a4b0ac5587806b98",
"assets/assets/icons/notification_ticket.svg": "0739f68d904b701fd5919b8ee1011ecd",
"assets/assets/icons/percentage_icon.svg": "ae7f430ed49d21d0dd10b6e637451f83",
"assets/assets/icons/phone_icon.svg": "0c662f65439c8c83d46618c04045bd3e",
"assets/assets/icons/save_icon.svg": "971998a5099c6360729e692c8af9f29b",
"assets/assets/icons/send_icon.svg": "9ff9a4ad0921adef5665d9b3094ee2a0",
"assets/assets/icons/timeline1.svg": "0e8025749963b587d70f36e81e8bca28",
"assets/assets/icons/timeline2.svg": "0c447c65c316655e838e48439fcbf739",
"assets/assets/icons/trash_icon.svg": "a5f9f9bb723bb16b1b04bfb15d2bbfe0",
"assets/assets/icons/user_icon.svg": "e74398bd21d03934b9293cc673d8356a",
"assets/assets/images/afta_log2o.png": "262d7514315995b8f40275cd605148ca",
"assets/assets/images/afta_logo.png": "d7910c44d3e54308f0cdb1c1ef22f6fb",
"assets/assets/images/chat_bg.jpg": "9774cb8f007d8adc08838313ea54cc78",
"assets/assets/images/user_placeholder.jpg": "ce179652b835902f9a6555e73c5ecf63",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d412e86e4d2d621c0800168f50995db6",
"assets/lib/i18n/app_ar.arb": "0219d85554ba5b9ea5f3c56bec4c4045",
"assets/lib/i18n/app_en.arb": "83a6bb60a80402452be766af96a715c8",
"assets/NOTICES": "347fa7f8bfa388a3c2e41e78323eb020",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "31db837360ad5066e5c412067e806d54",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42a778848d41495e4c0dce25665e6832",
"/": "42a778848d41495e4c0dce25665e6832",
"main.dart.js": "79edd55a500ea05be24f1982d96c9d9c",
"manifest.json": "2f28d679221c366b6fe68acda53e3fe5",
"version.json": "115289e350876dd4e93a2880a8c4af7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
