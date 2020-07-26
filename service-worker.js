/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/03/02/iou-net/1.jpg","9dc747cf57a7004e59eec7a97edb4d6c"],["/2020/03/02/iou-net/10.jpg","55424f31f60205b81e86ba679f4d7b0e"],["/2020/03/02/iou-net/11.jpg","4e405cc89812c9fd618a40d1c872c227"],["/2020/03/02/iou-net/12.jpg","d1355fc7b2916aaca7ea26a627ebe83f"],["/2020/03/02/iou-net/13.jpg","2f2636bba85878fce8f805565596b96d"],["/2020/03/02/iou-net/14.jpg","67697544982a097a19d1684cebc6e7c7"],["/2020/03/02/iou-net/15.gif","6c5c870c39ff3aaae223d75d0c2d9340"],["/2020/03/02/iou-net/16.jpg","1da5cc4047caa6afc98dc021432f07d0"],["/2020/03/02/iou-net/17.jpg","4991feeff30bdf9a99c6f0c3734dfb57"],["/2020/03/02/iou-net/18.jpg","6467ec73024d3c03c20be285b2ec8247"],["/2020/03/02/iou-net/19.jpg","31ddad3627db3fed2d4b3639e95f761e"],["/2020/03/02/iou-net/2.jpg","bbcece037f095b1e688cce48c713e6a6"],["/2020/03/02/iou-net/20.jpg","8b37d86d833148811dfb0b341eb62b41"],["/2020/03/02/iou-net/21.jpg","0ed2a9f82d5e715024d457ca3f568305"],["/2020/03/02/iou-net/22.jpg","ee0ad61198d140db6f1d07330569d620"],["/2020/03/02/iou-net/23.jpg","3c70e34c74d85f70089448d608f05d73"],["/2020/03/02/iou-net/24.jpg","efb6fbca46371ccdad85cd544e07a191"],["/2020/03/02/iou-net/25.jpg","b9bb16462b901576822e8fa23da4e129"],["/2020/03/02/iou-net/26.jpg","f2db3d28d308477655f7924c4e1b9598"],["/2020/03/02/iou-net/27.jpg","2c68e083505b4bb0950568fe3017b5b8"],["/2020/03/02/iou-net/28.jpg","7c43ed6bf44c9532a6ae695fc1d5dfa1"],["/2020/03/02/iou-net/29.jpg","f13a72a5b1e1caa02caaa04e0e1c4377"],["/2020/03/02/iou-net/3.jpg","878bbda1f029ba955b114a507eabfa06"],["/2020/03/02/iou-net/30.jpg","5d8a08219267643f79066c4709004109"],["/2020/03/02/iou-net/4.jpg","565a60f2d9683ba498a38214a33f1749"],["/2020/03/02/iou-net/5.jpg","f2228ea8fbf55d7c4411e91c6e0f83bf"],["/2020/03/02/iou-net/6.jpg","5ecec263213ce3b732cd02a4fe9a4383"],["/2020/03/02/iou-net/7.jpg","aa9969063a265c44f133016ffb865ae1"],["/2020/03/02/iou-net/75922-20180306111851933-70273855.jpg","cfdae379fccdd15acf10bfbd155c15c9"],["/2020/03/02/iou-net/75922-20180306111851933-70273855.png","791c08dde622ebb52d8b0bd4b47f59d9"],["/2020/03/02/iou-net/75922-20180306113548668-1747435774.jpg","2a15b700b1e2a2760c23c134d91491e0"],["/2020/03/02/iou-net/8.jpg","9b10389b775037d085d0276e09ba3011"],["/2020/03/02/iou-net/9.jpg","5788149526f40223adc83a889b9b78b9"],["/2020/03/02/iou-net/equation-2.svg","4a8ee3a9c2c088d4cbe25d494825981d"],["/2020/03/02/iou-net/equation.svg","c816f1efaaf45e2d42799d62464baa38"],["/2020/03/02/iou-net/index.html","6cb154af412822a6dce0b9abb2481d5c"],["/2020/03/02/iou-net/v2-e78fcd1ea642bfad66ec37b4e3e3c7ca_r.jpg","6c27f6d9ea89527be0b9611a3c0566f2"],["/2020/03/06/atom/1.jpg","206b57c7369fb330dc8eee3a22e29b89"],["/2020/03/06/atom/10.jpg","15e569212195550834e6b36b593faf65"],["/2020/03/06/atom/11.jpg","f3110e11c45a8a2fc9ec8c3a4de31ff3"],["/2020/03/06/atom/12.jpg","86470c998b68cd93e9e04b71c1286fb7"],["/2020/03/06/atom/13.jpg","2707b996df2d5b0094f6eed8d0aefe24"],["/2020/03/06/atom/14.jpg","27758dc9c8a14122aa71070bce553c98"],["/2020/03/06/atom/15.jpg","c76206d1fbb7b14c6b9ff48ac2fa9ee8"],["/2020/03/06/atom/16.jpg","e3445dd402756218f7db8585a0454f18"],["/2020/03/06/atom/17.jpg","d49fbbad5c13be7c6be11055535c1411"],["/2020/03/06/atom/2.jpg","e7cb128f95ecda7174e018483b00c683"],["/2020/03/06/atom/20190731154944824.jpg","53a8cb295005c5e7bdbf92d50c5ef797"],["/2020/03/06/atom/20190731154944824.png","0c1c42133291d60cb6d3ac78e7fedf24"],["/2020/03/06/atom/20190731160156261.jpg","bcfe4385f151b8d7a4f18893565c7e86"],["/2020/03/06/atom/20190731160156261.png","78a9065f87142c7b5d6aa97e7439751e"],["/2020/03/06/atom/20190731213039188.jpg","9f241772fd2107f6298e1af21dacbd96"],["/2020/03/06/atom/20190731213039188.png","95cfc71304fa3d24c3fe998cc3db8b6f"],["/2020/03/06/atom/20190731213138893.jpg","3fcb9f69b349e3b4db0e48ca9863ee6b"],["/2020/03/06/atom/20190731213138893.png","e70b138a5aa6bd97bb18b23609db6401"],["/2020/03/06/atom/20190731213639984.jpg","c335e75867792055c9ef134d129515d6"],["/2020/03/06/atom/20190731213639984.png","9b549f9e0ea08b9b8d046c2e6f975b9d"],["/2020/03/06/atom/20190731213922510.jpg","f2519463293da34d8edf639805548fd0"],["/2020/03/06/atom/20190731213922510.png","9b605dd397ccc98400ab836ac98f3f3a"],["/2020/03/06/atom/20190731214021772.jpg","0e84f7d2ccfb6e5b07143fba86a0123a"],["/2020/03/06/atom/20190731214021772.png","435c6b8ee1c55ef828781970a40be427"],["/2020/03/06/atom/3.jpg","02339d502abdff30e94066900b9298cc"],["/2020/03/06/atom/4.jpg","3d0474dd4042fb53f8655b494732f142"],["/2020/03/06/atom/5.jpg","7ee9df6ac64448493dbb4f9f4d2e2111"],["/2020/03/06/atom/6.jpg","5f966c66e58e430f928a276099493b4e"],["/2020/03/06/atom/7.jpg","bc09663961f681cc9c8c2559cffba040"],["/2020/03/06/atom/8.jpg","3482a067ea35977cecb2fe98c2bbba8d"],["/2020/03/06/atom/9.jpg","d11b01e8364557da5a13e5a2e89cae85"],["/2020/03/06/atom/index.html","9e71a62dd9c74fcd6b7eeb3c1671ed44"],["/2020/03/15/deep-visual-tracking-review/100043371-70589-3.jpg","a5d85a02c716a8726d7c65e42ac88f33"],["/2020/03/15/deep-visual-tracking-review/20190724102008589.jpg","39a25f10b8c11ea43cd99faf96280941"],["/2020/03/15/deep-visual-tracking-review/20190724102008589.png","2840480c70efef5fa4c39d5e397f08ea"],["/2020/03/15/deep-visual-tracking-review/20190724102610412.jpg","c1acf5447088b3dfc64b8031c4b27019"],["/2020/03/15/deep-visual-tracking-review/20190724102610412.png","938b33520a84dc5583a88ff1f459164e"],["/2020/03/15/deep-visual-tracking-review/20190724111931763.jpg","7d05f83c86ddc52f56ce1e3b8bb31f9b"],["/2020/03/15/deep-visual-tracking-review/20190724111931763.png","d99b4f1f36bd1aab39ac952a344713d9"],["/2020/03/15/deep-visual-tracking-review/20190724151130529.jpg","5ebb48ae9c504a2ba49f6730ca9729d2"],["/2020/03/15/deep-visual-tracking-review/20190724151130529.png","27d50c56364ae214aa9ff4730e76c96d"],["/2020/03/15/deep-visual-tracking-review/image-20200228151545430.jpg","b000033c61dc94d854b844b0660a8642"],["/2020/03/15/deep-visual-tracking-review/image-20200228151545430.png","63739385c5a119719bae010c8c717662"],["/2020/03/15/deep-visual-tracking-review/image-20200229120059979.jpg","3e77d643189031ac365da41a9f2194ec"],["/2020/03/15/deep-visual-tracking-review/image-20200229120059979.png","7519984490bd9fdce94aa7dbd535a86e"],["/2020/03/15/deep-visual-tracking-review/image-20200229122329696.jpg","e6099047d712967c624eb605c3c48170"],["/2020/03/15/deep-visual-tracking-review/image-20200229122329696.png","8badc04b7b857934ea93cd00671d06f8"],["/2020/03/15/deep-visual-tracking-review/image-20200229140118436.jpg","1e2094e12daddba4e154a95b7206ef11"],["/2020/03/15/deep-visual-tracking-review/image-20200229140118436.png","f29aad2aae1f95929c64bdac7a605706"],["/2020/03/15/deep-visual-tracking-review/image-20200229140541563.jpg","839ec5c918e833e5c907d751c8a3079e"],["/2020/03/15/deep-visual-tracking-review/image-20200229140541563.png","c8cd04aab492bbe13efb8093c42d4fe6"],["/2020/03/15/deep-visual-tracking-review/image-20200229140704579.jpg","bb238587d67f56e9815d3ee696891f3b"],["/2020/03/15/deep-visual-tracking-review/image-20200229140704579.png","005230c0e57864362545c1d488e55c6d"],["/2020/03/15/deep-visual-tracking-review/image-20200229140937933.jpg","eabc6e59ea21d6244017f28c7950fa1f"],["/2020/03/15/deep-visual-tracking-review/image-20200229140937933.png","dc70cced357bdb154d3030f4ceb97c44"],["/2020/03/15/deep-visual-tracking-review/image-20200229151210070.jpg","c5df7e285ad22a081c4678dc65844b00"],["/2020/03/15/deep-visual-tracking-review/image-20200229151210070.png","25f3946eb969c01f01daca6d15f4ba89"],["/2020/03/15/deep-visual-tracking-review/image-20200229151611561.jpg","7ea0cab595ecdf332423cf87c2564490"],["/2020/03/15/deep-visual-tracking-review/image-20200229151611561.png","6bf5a94716b15b9f63226e40e13e9c8e"],["/2020/03/15/deep-visual-tracking-review/image-20200229155335926.jpg","87b02a6d35bcbae878ef683e7bc9210e"],["/2020/03/15/deep-visual-tracking-review/image-20200229155335926.png","042a7ee095f2df86f0f747d677c8cfac"],["/2020/03/15/deep-visual-tracking-review/image-20200229162119683.jpg","cc8a1415412a41ccc4d4b0e08bcfbbaa"],["/2020/03/15/deep-visual-tracking-review/image-20200229162119683.png","fb3e364a51756040ec9dd45eee3bcaa5"],["/2020/03/15/deep-visual-tracking-review/image-20200229191610219.jpg","6a0071ca6d0c0e26364262b2ffdeb4c3"],["/2020/03/15/deep-visual-tracking-review/image-20200229191610219.png","54fb1412a35f603c521f2630b675a7c8"],["/2020/03/15/deep-visual-tracking-review/image-20200301092150467.jpg","d94c78c3954bd48301b2c1efaf18f7c7"],["/2020/03/15/deep-visual-tracking-review/image-20200301092150467.png","e735efceb47f63ea64bc170eda3130be"],["/2020/03/15/deep-visual-tracking-review/index.html","57f7f1dea7219727a3087dae10f8a85a"],["/2020/03/15/deep-visual-tracking-review/vot1.jpg","d57b5b5161852bf0089f1c9f434f7536"],["/2020/03/15/deep-visual-tracking-review/vot11.jpg","262ca05ead0a341f993945d19fafea30"],["/2020/03/15/deep-visual-tracking-review/vot13.jpg","74a45e7b3efa8b2bfb665e05cd3ad2e5"],["/2020/03/15/deep-visual-tracking-review/vot14.jpg","e90ea9e37ba243dd709230e38e9f8ae6"],["/2020/03/15/deep-visual-tracking-review/vot2.jpg","86a2ad52697e926237be4a6489fee625"],["/2020/03/15/deep-visual-tracking-review/vot3.jpg","ee105a4545a8ea7b2b41f3c4fb1178dd"],["/2020/03/15/deep-visual-tracking-review/vot4.jpg","8b6a8c5d1014517a4dd869c1d28279ea"],["/2020/03/15/deep-visual-tracking-review/vot6.jpg","1e49543d8a9d0ae1c8a0f3937f286345"],["/2020/03/15/deep-visual-tracking-review/vot7.jpg","5bde7c4cc5191a489e42d060026abb96"],["/2020/03/15/deep-visual-tracking-review/vot8.jpg","ae82bd049006fba90a5cb7db5b102eb8"],["/2020/03/15/deep-visual-tracking-review/voteoa.jpg","d4c2c5a90da50511c6fac192d548013a"],["/2020/03/16/siamese-cascaded-rpn/1.jpg","daf1c29d81c4fa33039e7929f74ec5d4"],["/2020/03/16/siamese-cascaded-rpn/2.jpg","1af0c7f707e9a9f89fe894cfd87569bb"],["/2020/03/16/siamese-cascaded-rpn/3.jpg","9926e26480722e2ec9ea7a29bac7bced"],["/2020/03/16/siamese-cascaded-rpn/4.jpg","c8ed94d0ab5f68c80fbc699620665b29"],["/2020/03/16/siamese-cascaded-rpn/5.jpg","e85217a9c864bb444a884f09a9bc38ff"],["/2020/03/16/siamese-cascaded-rpn/6.jpg","61304b34814f1b1eb20184ae7bc5e957"],["/2020/03/16/siamese-cascaded-rpn/7.jpg","d166ffd20e1e56cdb19e5d23cf2b9d04"],["/2020/03/16/siamese-cascaded-rpn/8.jpg","51078f6fe950960f5948d22d34fbe4c0"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221604131.jpg","8a3c91ff8b657f8916d73298f8064b39"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221604131.png","fe7b645a6c973245e967f3d89e053f7f"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221627393.jpg","78b39a2a5f1bc25d7d6563101df5f6f5"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221627393.png","460954f2486c7b7bb9253ee20b5dcaa2"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221642822.jpg","f0ba91946178b4f49f9ad71e74f327f8"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221642822.png","5c2d1118cd6bbaf646db42b3c701bc0a"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221706307.jpg","8d5686606fd63826d91392964afad7c3"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221706307.png","1206b8e9532e05cdb7dbe52c5b33c1f5"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221738139.jpg","369ef2f71861f1cd3388800f97f08a74"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221738139.png","cd256ba6cd4018b86870181d3d8b530c"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221800658.jpg","ce55797f599e379d61d5bf1759960bae"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221800658.png","58d49f2d35a4b244f5fff095f54b2f5f"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221817134.jpg","36da4afb089d6cd23f55540b9c322285"],["/2020/03/16/siamese-cascaded-rpn/image-20200306221817134.png","1eef43df7757ca350ee9d0f5fa25fe3b"],["/2020/03/16/siamese-cascaded-rpn/index.html","93bfe9980767575dfcb12a7d5bbbb57b"],["/2020/05/01/siam-r-cnn/image-20200425132012693.jpg","910a24707268a0d9a6753bc0460227e6"],["/2020/05/01/siam-r-cnn/image-20200425132012693.png","68e3771d332013089966fecf8ef74a71"],["/2020/05/01/siam-r-cnn/image-20200430211701696.jpg","50ce7827d82d410570d584696b792438"],["/2020/05/01/siam-r-cnn/image-20200430211701696.png","314b418ca2d8f9702036affb94829cf1"],["/2020/05/01/siam-r-cnn/image-20200501085453272.jpg","01f8ffb209f4fc450817b241c9917655"],["/2020/05/01/siam-r-cnn/image-20200501085453272.png","522ca5e4033b16893a5e12bb510f9a2f"],["/2020/05/01/siam-r-cnn/image-20200501085541966.jpg","86bb15210f52e10667b608ad138646dc"],["/2020/05/01/siam-r-cnn/image-20200501085541966.png","88290efbd91c7c7976cdca1da04c141c"],["/2020/05/01/siam-r-cnn/image-20200501085601130.jpg","b70bc80d23c92083752a05234a9f1501"],["/2020/05/01/siam-r-cnn/image-20200501085601130.png","0cd80ea79ca2c130d19d26ee60268d33"],["/2020/05/01/siam-r-cnn/image-20200501101651228.jpg","901eb1882ef57098079a7d297b0c4154"],["/2020/05/01/siam-r-cnn/image-20200501101651228.png","fb93d8eee34e433b47cf12374f463f2b"],["/2020/05/01/siam-r-cnn/image-20200501102156111.jpg","17b9e84a8479a5e5095367ee74f799dd"],["/2020/05/01/siam-r-cnn/image-20200501102156111.png","c311abac2b32d0d48cb8586994fb8201"],["/2020/05/01/siam-r-cnn/image-20200501123523423.jpg","85fce281adef43ebac3549f33ca8349a"],["/2020/05/01/siam-r-cnn/image-20200501123523423.png","f7c60eae8cd012ee947f0afd55ea365f"],["/2020/05/01/siam-r-cnn/image-20200501123904078.jpg","89b989a84f68496ed2dbd569db3ff159"],["/2020/05/01/siam-r-cnn/image-20200501123904078.png","f4beeef5e5e0c3e40ac7f2e8721d42cd"],["/2020/05/01/siam-r-cnn/image-20200501135000807.jpg","7bb112f8eac0b0ef9c643def2544cee3"],["/2020/05/01/siam-r-cnn/image-20200501135000807.png","e588f6029d50ccbce1f23e3c763d70dd"],["/2020/05/01/siam-r-cnn/image-20200501140213541.jpg","a12cce6037ceaa96c4454efdc54408ba"],["/2020/05/01/siam-r-cnn/image-20200501140213541.png","07d2aa9ffb2ad230f4fd6aa682e03794"],["/2020/05/01/siam-r-cnn/image-20200501140233721.jpg","a48a377fc47790bd216ab840819c7f0b"],["/2020/05/01/siam-r-cnn/image-20200501140233721.png","5b4779e0dcfaf0c77635ce7d7467782d"],["/2020/05/01/siam-r-cnn/image-20200501140259468.jpg","4ba81e934b667afe48cfdbf797135754"],["/2020/05/01/siam-r-cnn/image-20200501140259468.png","03cbe98d7d3221bcb30216f8edf8e588"],["/2020/05/01/siam-r-cnn/image-20200501140333522.jpg","763af506fba5a7274e7cc5b3d3c82c28"],["/2020/05/01/siam-r-cnn/image-20200501140333522.png","44b9cfc90c18a719c065a826331ac80d"],["/2020/05/01/siam-r-cnn/image-20200501140402743.jpg","1a403be709b024a11668411a5d9d6ad3"],["/2020/05/01/siam-r-cnn/image-20200501140402743.png","7b92fa26ab16867f914c6c0557ee6169"],["/2020/05/01/siam-r-cnn/image-20200501140430142.jpg","b77345ee7e4ff506de24e941733f9124"],["/2020/05/01/siam-r-cnn/image-20200501140430142.png","91f7ccc419771d11de137e3e929c6d86"],["/2020/05/01/siam-r-cnn/image-20200501140449130.jpg","944c889ac6ef08c797bfaaec187a877b"],["/2020/05/01/siam-r-cnn/image-20200501140449130.png","f557ec17509dd3ca42df49ef185818a5"],["/2020/05/01/siam-r-cnn/image-20200501140515651.jpg","dfb6b7dc90d883dd6453d0f456e3affe"],["/2020/05/01/siam-r-cnn/image-20200501140515651.png","210c8d1340709973ca06f7c21da1eff4"],["/2020/05/01/siam-r-cnn/image-20200501141641949.jpg","6ba83aa125970586b673a62733e7f529"],["/2020/05/01/siam-r-cnn/image-20200501141641949.png","ee02e93883e84b376ef8ba11f648e6d6"],["/2020/05/01/siam-r-cnn/index.html","0389f8fbce4da026bc158abd6f3b3ac7"],["/2020/05/18/dimp/20181206174550851.jpg","e90d195c4e0ae5ef9f351c5109b3f0eb"],["/2020/05/18/dimp/20181206174550851.png","f7afcfdce986afa6b62f019101912d94"],["/2020/05/18/dimp/20181213172037983.jpg","0a378bf17dafd2f59248846244973a9c"],["/2020/05/18/dimp/20181213172037983.png","2c8f2f45221ac1879c487d16f765fb07"],["/2020/05/18/dimp/20190731160156261.jpg","6d895d1a179b0fcdb96db4202566117d"],["/2020/05/18/dimp/20190731160156261.png","fa8dba36d4dc0973ba221e549abc3c29"],["/2020/05/18/dimp/image-20200509205838642.jpg","6b741e40748109a9dc68c3256acff6ba"],["/2020/05/18/dimp/image-20200509205838642.png","58bf9b969a358d40b96fdbd26fc08fbf"],["/2020/05/18/dimp/image-20200509214225790.jpg","db339a277f0a2b0131a6052f831116ee"],["/2020/05/18/dimp/image-20200509214225790.png","7897b2a64bb640be1ff60e1b281dcb16"],["/2020/05/18/dimp/image-20200509214300357.jpg","39d6ab77679a0da8004d8ac42f38dbf4"],["/2020/05/18/dimp/image-20200509214300357.png","d8b8f02e32fa888a729e6c08ea32e16a"],["/2020/05/18/dimp/image-20200509214327720.jpg","8eeb9c770681726b008da0f9bc924894"],["/2020/05/18/dimp/image-20200509214327720.png","261cf3aa491fad0707f2e928db6611e8"],["/2020/05/18/dimp/image-20200509214353176.jpg","c6afbf6d0cf13379f70196354796a031"],["/2020/05/18/dimp/image-20200509214353176.png","4eb0a66d6ae4abe994029e4caa19f79f"],["/2020/05/18/dimp/index.html","cd09f0d7e7e22604d93ef80f43aac5e6"],["/2020/05/23/maml-bi-ji/5971313-152cb2d4c07fce20.jpg","3398c030cfcb20230f6e0ce500533105"],["/2020/05/23/maml-bi-ji/image-20200501141721053.jpg","a8b8832a1fe1de518cc4600916d03b8b"],["/2020/05/23/maml-bi-ji/image-20200501141721053.png","2c0a1ec8f805a3c6a73927c1ac8c9ddc"],["/2020/05/23/maml-bi-ji/image-20200502092252377.jpg","6d6e58bc2e84d80d0685b40506041f88"],["/2020/05/23/maml-bi-ji/image-20200502092252377.png","d900953a88cb72508a5bade2b76fb53b"],["/2020/05/23/maml-bi-ji/image-20200502092323876.jpg","fb480a8cd49f664a3b7fc5271806f8db"],["/2020/05/23/maml-bi-ji/image-20200502092323876.png","3f6d9ffea491208f7a0165919013830c"],["/2020/05/23/maml-bi-ji/image-20200502092349927.jpg","4e502c7629972d80ab3200d0f95cbc82"],["/2020/05/23/maml-bi-ji/image-20200502092349927.png","1bf28990e498e0d31c0a2df6dd1d9fa0"],["/2020/05/23/maml-bi-ji/image-20200503174910896.jpg","8292444d4da7e4a8959d13f9e0a678f9"],["/2020/05/23/maml-bi-ji/image-20200503174910896.png","5ce8e7bd4102ed6f517d63303749b78f"],["/2020/05/23/maml-bi-ji/image-20200508095947264.jpg","61679f126274cbc75faadb45368c0b17"],["/2020/05/23/maml-bi-ji/image-20200508095947264.png","1213358d7b1db137d17b7fbfb3a0e947"],["/2020/05/23/maml-bi-ji/image-20200508101652361.jpg","c27b57c6d2971d0257c1973ffdb570e3"],["/2020/05/23/maml-bi-ji/image-20200508101652361.png","abae6bb4480ac880057187340b00f619"],["/2020/05/23/maml-bi-ji/image-20200508101910940.jpg","eb0aeb5430f8a3652c42ba4ec7656b8d"],["/2020/05/23/maml-bi-ji/image-20200508101910940.png","a86f49792a6fa84cbfc31af28f5ebdee"],["/2020/05/23/maml-bi-ji/image-20200508173437682.jpg","6b3e5f0cb92d438f277bcf8a13b6ed62"],["/2020/05/23/maml-bi-ji/image-20200508173437682.png","1a9b6aba6dffcb63625d80701db233ac"],["/2020/05/23/maml-bi-ji/image-20200508173805473.jpg","ec36b8264eaa69ff3ed8cef9abd6354e"],["/2020/05/23/maml-bi-ji/image-20200508173805473.png","b35b988e39adeb3c3223c2ab746724a5"],["/2020/05/23/maml-bi-ji/image-20200508173826254.jpg","f954181f43abd130fabe3190805af0a9"],["/2020/05/23/maml-bi-ji/image-20200508173826254.png","e11595c247b14576690afffcfeda6a58"],["/2020/05/23/maml-bi-ji/image-20200508174139349.jpg","910a2225693f987e7b5584e4a773e11b"],["/2020/05/23/maml-bi-ji/image-20200508174139349.png","e9208f61a17fda620479a3772dcc70f6"],["/2020/05/23/maml-bi-ji/image-20200508205138579.jpg","1c6f7aeb388298400aa4b0e3cb7c470f"],["/2020/05/23/maml-bi-ji/image-20200508205138579.png","c4a1f50e8f999d416c9baab3c35a85c9"],["/2020/05/23/maml-bi-ji/index.html","e36443287b15cc0ca26fcdb1c107c5c4"],["/2020/05/26/ltmu-bi-ji/image-20200516203018522.jpg","b03c74323fdbbba86633f748815c38df"],["/2020/05/26/ltmu-bi-ji/image-20200516203018522.png","69339644002ab32763231b69e7728a40"],["/2020/05/26/ltmu-bi-ji/image-20200516214140332-1592291613452.jpg","df04971503a4c4d80a97af930b1c5d8b"],["/2020/05/26/ltmu-bi-ji/image-20200516214140332-1592291613452.png","733968837b04f4e454215dee29f48935"],["/2020/05/26/ltmu-bi-ji/image-20200516214140332.jpg","df04971503a4c4d80a97af930b1c5d8b"],["/2020/05/26/ltmu-bi-ji/image-20200516214140332.png","733968837b04f4e454215dee29f48935"],["/2020/05/26/ltmu-bi-ji/image-20200522103348181.jpg","20d2a75c4d631da9367270257d8a7163"],["/2020/05/26/ltmu-bi-ji/image-20200522103348181.png","a3560a83e81298549081b12890e42600"],["/2020/05/26/ltmu-bi-ji/image-20200523100900734.jpg","6c4f4ebd34ddba52957f6cd7f702b55b"],["/2020/05/26/ltmu-bi-ji/image-20200523100900734.png","ad4c1e972276411514f6759347449170"],["/2020/05/26/ltmu-bi-ji/image-20200526110004333.jpg","01184fa16d97b8cbed873c9643920869"],["/2020/05/26/ltmu-bi-ji/image-20200526110004333.png","a135dd75911e51742c9379dea979ef98"],["/2020/05/26/ltmu-bi-ji/index.html","b64288ff5b5efb2d02871e64fd997c2d"],["/2020/06/03/siamban/20200323152713812.jpg","e7062d5cf54ce2533d9239a1f655740c"],["/2020/06/03/siamban/20200323152713812.png","bd2ff58ae16d6b414de38dec463df8c6"],["/2020/06/03/siamban/image-20200525183540212.jpg","016abbbbbf6c21f368fe5692d64f8873"],["/2020/06/03/siamban/image-20200525183540212.png","c2ad36bbb3b7b73f551fab572145de48"],["/2020/06/03/siamban/image-20200525183543042.jpg","016abbbbbf6c21f368fe5692d64f8873"],["/2020/06/03/siamban/image-20200525183543042.png","c2ad36bbb3b7b73f551fab572145de48"],["/2020/06/03/siamban/image-20200601143104215.jpg","ed34dc735373105d4014bb2c41a80d6c"],["/2020/06/03/siamban/image-20200601143104215.png","7f8f1a61f4ada025fd39d2b51ee16836"],["/2020/06/03/siamban/image-20200602120406328.jpg","0c32afedadf1a314413b7a43cfa3850f"],["/2020/06/03/siamban/image-20200602120406328.png","898f4f18d50ba73b94500a75cece37dd"],["/2020/06/03/siamban/image-20200602122959610.jpg","eab2799ce8b303b562539067b12de920"],["/2020/06/03/siamban/image-20200602122959610.png","6c28d1a147699dd9b925bb90decacbb9"],["/2020/06/03/siamban/index.html","9ce50cb9a9e7082a8aecbc7881ce270e"],["/2020/06/08/siamattn/image-20200606150148134.jpg","72a79e44de5c18a73ee4829bc28409be"],["/2020/06/08/siamattn/image-20200606150148134.png","ba58afac68e04786ed68fffa40f34386"],["/2020/06/08/siamattn/image-20200608091816705.jpg","53c305e6f6610de10eaf32a7167dae30"],["/2020/06/08/siamattn/image-20200608091816705.png","40979cf7c3664e013f3d58f519b40f6e"],["/2020/06/08/siamattn/image-20200608093015025.jpg","8eb601bb163353757f87a4856ebccb89"],["/2020/06/08/siamattn/image-20200608093015025.png","5d0804a28880465f7a6073135bcebf2a"],["/2020/06/08/siamattn/image-20200608093821599.jpg","6e0cac8cdb6d675d328e5d9d1c7630b7"],["/2020/06/08/siamattn/image-20200608093821599.png","77b2e616b36eb809dc20e2c6f9d1b1bd"],["/2020/06/08/siamattn/image-20200608094712370.jpg","ebda1795d46e2248de56d01fac23d92a"],["/2020/06/08/siamattn/image-20200608094712370.png","617cf34aed84c68ae4acb5181d39cb06"],["/2020/06/08/siamattn/image-20200608095046008.jpg","68d466d8225321c8a237d0935cda5932"],["/2020/06/08/siamattn/image-20200608095046008.png","198a91e03073aa6cca83fee1e6a48826"],["/2020/06/08/siamattn/image-20200608095719104.jpg","e5307ff1b195f25a7ae716569606ee91"],["/2020/06/08/siamattn/image-20200608095719104.png","911e97fb43a45a136b5bf67a61f6ec50"],["/2020/06/08/siamattn/image-20200608104249744.jpg","9550e6600848ead69165b3f004d6521b"],["/2020/06/08/siamattn/image-20200608104249744.png","d50253b9ff6a905edca98c977e6281ca"],["/2020/06/08/siamattn/image-20200608104315288.jpg","23f36f0e3eb3af8586c415aa42f9d530"],["/2020/06/08/siamattn/image-20200608104315288.png","6c707085f35798f5edfbe2244da63505"],["/2020/06/08/siamattn/image-20200608124833163.jpg","73d43c4901e0e1aeb304c53ed0faf412"],["/2020/06/08/siamattn/image-20200608124833163.png","18d873a2654af93331df81bb743b7ac2"],["/2020/06/08/siamattn/index.html","49a3f78865eb0b2ac6d011b636c1bd55"],["/2020/07/05/siamrpn/image-20200629142634296.png","a685db6809167e363c8c6dd8c29e74b6"],["/2020/07/05/siamrpn/image-20200702160817501.png","19221e5a305117a5c5f6be6ed8dcc66b"],["/2020/07/05/siamrpn/image-20200702161914523.png","4873d91f05be49fa057a368d8bd2a626"],["/2020/07/05/siamrpn/image-20200702162811365.png","94fa8a11f1ee46eb3b10b84938fd0630"],["/2020/07/05/siamrpn/image-20200702163155149.png","3ecf56f8514b2e6c7fa8bb1fb54a1d95"],["/2020/07/05/siamrpn/image-20200702163657358.png","f80213ef2134f637657261a3420b61b2"],["/2020/07/05/siamrpn/image-20200702163749662.png","2eab9a86212f6d201c93691697c3a6f8"],["/2020/07/05/siamrpn/image-20200702163802742.png","aea46422089b2f4107c8eec31a8399b9"],["/2020/07/05/siamrpn/image-20200702163829209.png","dcca2bc87f65bd9f893b788c7cac60b7"],["/2020/07/05/siamrpn/image-20200704092513986.png","1141fb9f24922945282690bc0fbc9a3e"],["/2020/07/05/siamrpn/image-20200704092530414.png","f18b09eb081129b5aff4474fe3f11123"],["/2020/07/05/siamrpn/image-20200704092649376.png","596563f9bb30cbf57156ef52bdf82ca7"],["/2020/07/05/siamrpn/image-20200704092707405.png","e3c9d03fed653e171067b1feac9d8a73"],["/2020/07/05/siamrpn/image-20200704092726498.png","3ff1e043dec8d2e5867ace4f64ddbb4d"],["/2020/07/05/siamrpn/image-20200704092746470.png","1cc674a927407960ba501f30cd9e48c9"],["/2020/07/05/siamrpn/image-20200704092806065.png","f94210f35ea7611b951ffb456d26ee88"],["/2020/07/05/siamrpn/image-20200704092838115.png","b97612f8c442afe2560a923fb18ca4d8"],["/2020/07/05/siamrpn/index.html","40b371cafee684af359f8d9e08abbddd"],["/404.html","e9779ec4e4f196df033fdda58e23749f"],["/archives/2020/03/index.html","69f9156a0afa86429e0919962d7a25c8"],["/archives/2020/05/index.html","927e4335e896e3e2504324f718e904ee"],["/archives/2020/06/index.html","9355e1258a241bb0dd10dcf2d7e0e29e"],["/archives/2020/07/index.html","12d8c965cc90885f3e7acbc31de5c066"],["/archives/2020/index.html","7b86b7c8207e6a1187dc2b213d700962"],["/archives/2020/page/2/index.html","464bc211171ea6b44abef776b28fc772"],["/archives/index.html","3d1146728d33b30e41468cd20e92494f"],["/archives/page/2/index.html","59dee77e59c158438e5c234729243cdb"],["/categories/IoU-Net/index.html","ccf9dcb0c12ebc6cfac56dfb83408bbf"],["/categories/Meta-Learning/Object-Detection/index.html","7afc6a78fbfd44436a3028de8b84a61f"],["/categories/Meta-Learning/index.html","39db9602fcb6b0d2bee66c40ba82015c"],["/categories/Review/index.html","39f27c8b1fdd4c750fc14afc3849e90d"],["/categories/Siamese-network/Attention/index.html","9941ad723e9c8af068e22940fa28d8e6"],["/categories/Siamese-network/IoU-Net/index.html","f81b6f58a7c9ef2d78bdf5204cd5e0d3"],["/categories/Siamese-network/LSTM/Meta-Learning/index.html","26ee0df3078e67709fcc133d04b7f0d9"],["/categories/Siamese-network/LSTM/index.html","f1e5cfc933e5906c4bde9904588abc8b"],["/categories/Siamese-network/RPN/index.html","5ed000dc4433a4f1f2fb4f5243e045aa"],["/categories/Siamese-network/index.html","8e9d5fc0fb16bd1b0940175b2ef22c90"],["/categories/index.html","1056add6638aa1725087c921bbfa9ced"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/index.css","7f5f12d422d9d3129537a90ef5950701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e65cd8cec8c600bf0a8fb1ba456bf027"],["/images/icons/icon-128x128.png","c9919666f100d89a12aec1329e7a164c"],["/images/icons/icon-144x144.png","6ae86e17c2f191902827b7ec9afe859e"],["/images/icons/icon-152x152.png","1956debe5c79f2f90f9766e90c51ec76"],["/images/icons/icon-192x192.png","edf8c71e3934c3767eadce70956e244c"],["/images/icons/icon-384x384.png","a12ff5ae44f0f469450c4603ffb1c633"],["/images/icons/icon-512x512.png","5a905d939ec0748d323c5af745a20dd7"],["/images/icons/icon-72x72.png","3104ede10c57051e5e263f7fa48adc05"],["/images/icons/icon-96x96.png","4e30c4cba0d2470aa7e7205b6c0487f4"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","4d6ca0a2c14370d90f93a0ac05dd1bfb"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","dd5b297c1da7dd5c1ebba183cefb3edb"],["/slides/index.html","073c657fe74f7a649a7a6d7174a49cf7"],["/tags/Attention/index.html","97ab53b55d688bc9b1e10dc54d0c055f"],["/tags/Faster-RCNN/index.html","df4130a948fe3e81ecfc4067f7fb7694"],["/tags/IoU-Net/index.html","d3b0531bc07acf702525ee8a7ba69397"],["/tags/LSTM/index.html","57d17e7d96a6922bd506ef5dd4bae9aa"],["/tags/Meta-Learning/index.html","aedb17b67681a293c8d4bc162f90b0b4"],["/tags/Meta-Updater/index.html","d477c94a5df1b7e8be1f05341c9091c1"],["/tags/Object-Detection/index.html","14acce65c8a277cea9c0e6bce5f1ab73"],["/tags/PrRoI-Pooling/index.html","c9096c618f5f45aa784fb35020c17fdd"],["/tags/RPN/index.html","bfd65851ffcd2cdcfbf1643a79942fca"],["/tags/Review/index.html","2f2ab33602371a088b57186914a0c680"],["/tags/Siamese-network/index.html","46c61d69cd3960ec0a7694556dc38894"],["/tags/index.html","f318581514e859f1e067de93881c7837"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"your_websie_url"});




