/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api/categories.json",
    "revision": "2cbe8ceaea3bb01faf19b094b8732666"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "e355e9f4e0ae2e1ef3490eceaa8982bd"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "2bdc9d1b8c5ca04289502c3178322187"
  },
  {
    "url": "api/categories/note.json",
    "revision": "29c9707cd9fb235e2edbcea6af72d1bf"
  },
  {
    "url": "api/categories/others.json",
    "revision": "f757e1c0e5efa68657f8cc1700077eff"
  },
  {
    "url": "api/home.json",
    "revision": "b074b3d08390aca76ddb26af7a5ee1d0"
  },
  {
    "url": "api/navigation.json",
    "revision": "50e852e943669045650ba76f027cb0e3"
  },
  {
    "url": "api/posts.json",
    "revision": "f009bee84b6e98427e41803b45b88f4b"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "4ff8df278257ac6b41989faaa668efab"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "89fa416a969b2e50c26be301795ff3c8"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "6c9f8f8a2286b9a4865b9754c51424cd"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "8eb0f11775934314f69511a2a9900bbe"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "1c41ceccc2cd899a53d0df0c77104202"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "7e5b91193b190b8be60f5eb364015c4d"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "f752819d19ef1130a6f227196f9a7fd6"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "8712b29c29076a9231b212b53613855b"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "70cac4edbad8f28c446c366fa7f13553"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "a6b62e52167d029ccd1b9ae6f935d4df"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "47f5825433512ccc7bf99c917807681e"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "0d28604b448268de95086c6b668d1337"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "034650be36009459a1b0d525045778fa"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "3e51ed63aeee85a315a6d9a64a2abd40"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "91247c57e16f273029e4981468405dba"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "8b432fa168e01ee1a9aab9d928dfa4dd"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "8b1f2313649b91c6fe8ac5d9468aec4c"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "390afc16bfba9f99f9c0a2355f4abc0b"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "52327b6f0baaf737a54f3594fc11b097"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "614e5e4b5cb489dc145420c52df25ad9"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "e59039c682b12f498c753138f4d0b44a"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "7e6d06eb5119f1fc4df6e641fc9f83ed"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "f92e278c08707d6f8df39cdd8ebea133"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "717b4c0cfde5933345652784ef2d8661"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "342f56d282cc3faccca424959bc6e81d"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "603c30514b06c1a84f9b1fe02ac33d25"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "0e29e0293205d476b410a4444aa0b0c7"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "b32656d3204dd7f47631e00fa5f4763e"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "ed2830176278cbcabbc8c805efadf511"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "080386f111afc49e19e15ee919da8d19"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "9fc04339d005b941dca08bc9b527bf95"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "df13f8c17540e460c290e089cb42a280"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "72df1dc3eb1a2a334a6cbb2dc19231b5"
  },
  {
    "url": "api/tags/github.json",
    "revision": "940556883fb6afe472310995585e8f18"
  },
  {
    "url": "api/tags/google.json",
    "revision": "2818186d6af0ea10fb5f4f9474c3eb82"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "56314a01e2d088a90f22ee8fa323f147"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "dc8f4c3c0966195bc476ac521a9d2c54"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "0abfb2a5ddac46ad859c1c33e43448a0"
  },
  {
    "url": "api/tags/java.json",
    "revision": "4a9f3e4f32d61f65f938caa7460785fe"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "bc7ea9e6240cbbf649d1bb25fb1e8386"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "024650550096b2610056aadaff3c040e"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "4529905efc695ad1844422ad4d01bf02"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "8537d098bdf1af296c13d28456185de9"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "9e7b4fefa6b9e639f8a19cb5c3574f7f"
  },
  {
    "url": "api/tags/node.json",
    "revision": "915ec6cf72687d9029c6bbff3e8a3836"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "5cb8c2d69776f36c729480695f1db39f"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "2331c96a2c702b36afd220f3709b51e0"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "c94dbe6c29ab618065921c37fa896986"
  },
  {
    "url": "api/tags/security.json",
    "revision": "8b157d34dc5f45356d99065067d078a2"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "073191dfb4a4137d893bdf4891f228e2"
  },
  {
    "url": "api/tags/site.json",
    "revision": "318e455f256f18ef670a263e664679ba"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "a1143c7ecb3553abc42a8ea6f8f8e46f"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "1777e4e9fabfbe5a3dc403e023d08577"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "9796bb0cd01a6bc34b89a6debe6e6f40"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "1fcfc8c94a66dbd72a728426073eb721"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "d39e69df03654dc60a5e69503d8fa0f9"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "8c0d91c277eef7fc615614c7a35401e0"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "fe64d599cd234ca37d625ff72d78e852"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "c14484870fa823b12e0df176385068e1"
  },
  {
    "url": "static/css/1.50baf40bcb16eb33bc5a.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/css/main.c9124b577a9584978e82.css",
    "revision": "1c88b0307f7fb4f0cdce3ca0c6617faf"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "ac0bfd15c90a2623c5d4b429dc8fccca"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "250330c21cd3a1d292b93905200f737c"
  },
  {
    "url": "static/js/main.c9124b577a9584978e82.js",
    "revision": "8366381f706d65ea9f2a4c08fd0b019e"
  },
  {
    "url": "static/js/vendor.50baf40bcb16eb33bc5a.js",
    "revision": "55ca43e0b3758638f13afe2c5c503aac"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/cover.png",
    "revision": "bf96451082f84eefae26e7ee2ee84e48"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.png",
    "revision": "1ad05d1227b446e6fdc3fb8ebd863124"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.png",
    "revision": "e5a7a31204dc6e1a398819bd3bd2e59a"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.png",
    "revision": "23238d2e7346c56b609fc2d8d4fa89c7"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.png",
    "revision": "2904e14888a44eead4a2a1834a9e4e0d"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.png",
    "revision": "1d63ae98241e35e54fe36fa18676da5e"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.png",
    "revision": "13db4713983d944a24edf08893fbc6d4"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.png",
    "revision": "7cbf2bf363a998b21c4cf36a05a19505"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.png",
    "revision": "31062ddeb12438bf11668119673946c5"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.png",
    "revision": "d19e7bdb9aea105381eafdef3c1c2b5d"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.png",
    "revision": "b3649900dad61b35224f6d1544881a94"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.png",
    "revision": "bbdf9fbbe2d51ca8dba0c0fb24af3fab"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.png",
    "revision": "728960bf52745d3b86f6b681e7f7b9e4"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.png",
    "revision": "4901e49d66a89fa8a097fa4ba5165274"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.png",
    "revision": "129fdfa276f32c12ae05f10e1458c03e"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.png",
    "revision": "77f78b3390432f02fac4ad87272bb4a1"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.png",
    "revision": "0d5bd29de4a8459550301dcd43e96def"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.png",
    "revision": "49043056816b212043afb6d13e13b750"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.png",
    "revision": "eeb78a4e9a4cada843280a263dd9bde0"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.png",
    "revision": "8f85e43cf1714fcded2a0ae9984b4817"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.png",
    "revision": "364dc76efe9757e9875a5f137d1a1711"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.png",
    "revision": "1ad90af955c0ca80d82f45b6c80d0562"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.png",
    "revision": "fe16414175af2109c6fc46711b927974"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.png",
    "revision": "521c74f19c2f1e26bd34dd9278004ed2"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.png",
    "revision": "a10a3bd4c2f73b12e6045c6c3b5ee63e"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.png",
    "revision": "b23c28809605d5c2cf34410437fd7473"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.png",
    "revision": "7cb44f64853eccb168d3c8f2b1d242b8"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.png",
    "revision": "adecd92b5e0f665ed8231933ea7060c6"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.png",
    "revision": "b79c26628da4713bda986420d55040fd"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.png",
    "revision": "b2809f573fd029429c8f3bba1ad2c9c6"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.png",
    "revision": "2fbd1bf471e0f7a1310fffeca3cbc5b4"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.png",
    "revision": "6f979cfb503916ca33e667d8eb1d5c9d"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.png",
    "revision": "eaf190f29c780d274bd438e4dd66ef61"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.png",
    "revision": "b34f317f5464f578cc6067d317afe22a"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.png",
    "revision": "943a204a96f8e82ed4829c4b4b36bc8e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.png",
    "revision": "ecafc71143263a54ce6fe060916cfab9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.png",
    "revision": "8c2b929a10844e5aa3f480fcd904acf2"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.png",
    "revision": "82dfd6b0817462d05f66a63041bbe37a"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.png",
    "revision": "bb44bca680967ae3b8bef4bc2f25707f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.png",
    "revision": "93f840a7599c54cc84d37d191baefe98"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.png",
    "revision": "4b44c85c276fc06f72e1d5dafebe92fe"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.png",
    "revision": "75c4b1a2583a9612b6d2a3f060e6741c"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.png",
    "revision": "d568cc8ac8245e00cb3a44921690e4e6"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.png",
    "revision": "41b1b21ec99509c4483066da718b7983"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.png",
    "revision": "8a9ec5e123a9b089947bf66d03078e9d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.png",
    "revision": "c6243476ddbfee3f6d7eb11fe5e25a17"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.png",
    "revision": "4cdf75bf21b165951ef08beb49322ab4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.png",
    "revision": "6d70f828f3632f2103915a061cb8937f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.png",
    "revision": "6a20de46807c1e2655c846c241a154e4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.png",
    "revision": "07eb5f69cb253d00b0bcbce28976fd58"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.png",
    "revision": "8039bffe0a0256979291b0f3bfa67aef"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.png",
    "revision": "28d40a65984188a82a0bc43558a7038e"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.png",
    "revision": "05ce4ffc74f591f0e4a64eabefe6737e"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.png",
    "revision": "6bd2faa31fea5101681b237692b137c0"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.png",
    "revision": "c1f8a0ded6ef16859b54d4b46d324388"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.png",
    "revision": "d2eb0401b07ce25850e9afcde28e0d06"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.png",
    "revision": "e51633959aabffd0d61f1323c17e26c4"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.png",
    "revision": "ee6a7f122a95a9b356bf434179d10485"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.png",
    "revision": "afe765a423b8ebac24fcaa8bbe959385"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.png",
    "revision": "704e5ccac667e591d333756b4037191a"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.png",
    "revision": "bb4509d155d9d5765f0128a8be8eeb6f"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.png",
    "revision": "60130fc05c1bc43bb422f5d1ee730916"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.png",
    "revision": "06465a91d135ae1cc8b7e684d0e75cfc"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.png",
    "revision": "e314a8a59b49cd1b5ae66e4064bb9344"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.png",
    "revision": "43dd75bc6d7d71bf40582e567ca34d42"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.png",
    "revision": "6d331f21efd7ad6dfa7a584ed3c4d3f2"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.png",
    "revision": "15c325c2b509b5771375fd17d7cbbce9"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.png",
    "revision": "ede4253dce2a541f04076f85d1458730"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.png",
    "revision": "a31aa7e5e3eed42d25422c828b0f76b4"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.png",
    "revision": "57c065dcc456873fb4b679e42eba0495"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.png",
    "revision": "9c6586057b46232199b096558fe54f06"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.png",
    "revision": "5824c20beadbe9cdd32e5018232dce33"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.png",
    "revision": "13fdd8e7c2c2c70882bbe8421bae0525"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.png",
    "revision": "752eba3537312d54d6e4d8d3477e2df5"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.png",
    "revision": "88b11a11cb40a1fe0b886ebb585abd55"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.png",
    "revision": "2e373fece1c8043329fa614febf8b5e9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.png",
    "revision": "f9618cb46aa1723b3b80f3b174e79f56"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.png",
    "revision": "b7133799f9dd8a63a902b87c3995f7ce"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.png",
    "revision": "adb0ae824da742473c0f2033e6f00ecb"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.png",
    "revision": "4b7a9084843e76909c32d57aa243a502"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.png",
    "revision": "015b81210929f3a1b197877115c7bf7a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.png",
    "revision": "afc4329118048573fb01812a2f5d61b9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.png",
    "revision": "6298ec98bcf0916a518e9d9fa1472963"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.png",
    "revision": "8cd6615c70a506d2af0fb6be36c39d5d"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.png",
    "revision": "cc8ee643d3e8fac1967950f8a6a87899"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.png",
    "revision": "8185a188a530fbbdc4d825d08bc8b862"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.png",
    "revision": "24b0c92caed88f3a7d38fed2f3d1ad82"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.png",
    "revision": "2e02e242aeff1319b2e9e208f93f2fe9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.png",
    "revision": "2d1b87575cdb798406a8c00be94fac7a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.png",
    "revision": "319248b963ccff9351786ba6752cde06"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.png",
    "revision": "7e1078afc3bfc02b767f24d6bf7fa343"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "ad0df58b3619051a7ea4ee5713a77a6a"
  },
  {
    "url": "static/img/android-chrome-144x144.png",
    "revision": "8bc62b2b6849e956715372c2e680530e"
  },
  {
    "url": "static/img/android-chrome-192x192.png",
    "revision": "67e7b67f62f2348c613168d4ec9d07bc"
  },
  {
    "url": "static/img/android-chrome-256x256.png",
    "revision": "f853ef7b313aea2e85229f5bf0ef430a"
  },
  {
    "url": "static/img/android-chrome-36x36.png",
    "revision": "d9356f81965328e13976651d8abc2224"
  },
  {
    "url": "static/img/android-chrome-384x384.png",
    "revision": "c4ea489cbcc904e6a242969d2f92a923"
  },
  {
    "url": "static/img/android-chrome-48x48.png",
    "revision": "0dbbf98a448f8f7aa3d2421a893b5e9c"
  },
  {
    "url": "static/img/android-chrome-512x512.png",
    "revision": "6fc48856e2a0303c25307c67da11a8ab"
  },
  {
    "url": "static/img/android-chrome-72x72.png",
    "revision": "f7235c1942364d7dc1df8513ce20b924"
  },
  {
    "url": "static/img/android-chrome-96x96.png",
    "revision": "3892e73d9e5a7a1b31161ccfa60e0840"
  },
  {
    "url": "static/img/apple-touch-icon-1024x1024.png",
    "revision": "55be9183f8b83c6145fe25f10fe436cd"
  },
  {
    "url": "static/img/apple-touch-icon-114x114.png",
    "revision": "ca1cc7fe32854558a9ec898c3dad63b7"
  },
  {
    "url": "static/img/apple-touch-icon-120x120.png",
    "revision": "33aa6e43be540c97e4aa40cd361c7868"
  },
  {
    "url": "static/img/apple-touch-icon-144x144.png",
    "revision": "33da0ebbd467d41630c659d8fafbca30"
  },
  {
    "url": "static/img/apple-touch-icon-152x152.png",
    "revision": "b52e6d6e9beeb880d947401976ccc97c"
  },
  {
    "url": "static/img/apple-touch-icon-167x167.png",
    "revision": "af77ec70ee708c12dec4756d59892c0a"
  },
  {
    "url": "static/img/apple-touch-icon-180x180.png",
    "revision": "d711e2db98d11d3a4d951c88eb4239c4"
  },
  {
    "url": "static/img/apple-touch-icon-57x57.png",
    "revision": "1f51e7dd2a9a637b4533188550f75201"
  },
  {
    "url": "static/img/apple-touch-icon-60x60.png",
    "revision": "1ce93c9ec151aae1efa388d0cde8cc44"
  },
  {
    "url": "static/img/apple-touch-icon-72x72.png",
    "revision": "54f709c4b501f72851ddbf8dbc748c0b"
  },
  {
    "url": "static/img/apple-touch-icon-76x76.png",
    "revision": "e3025e7ec955a1c4749078e7f171dc6d"
  },
  {
    "url": "static/img/apple-touch-icon-precomposed.png",
    "revision": "d711e2db98d11d3a4d951c88eb4239c4"
  },
  {
    "url": "static/img/apple-touch-icon.png",
    "revision": "d711e2db98d11d3a4d951c88eb4239c4"
  },
  {
    "url": "static/img/apple-touch-startup-image-1182x2208.png",
    "revision": "d9461752e72f9ad876191f4789bc9a46"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2148.png",
    "revision": "74760b8b75180f3d70f2297818a14479"
  },
  {
    "url": "static/img/apple-touch-startup-image-1496x2048.png",
    "revision": "abee5ef96ab63544ef98086cf96d5bd8"
  },
  {
    "url": "static/img/apple-touch-startup-image-1536x2008.png",
    "revision": "29572a06d7a370770bb57cebc9b1dccd"
  },
  {
    "url": "static/img/apple-touch-startup-image-320x460.png",
    "revision": "f8aae8231166e549797e10150a4e109d"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x1096.png",
    "revision": "9908075c32b50b05aa53e65258e391f0"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x920.png",
    "revision": "8875c0b4cc9549f86d2715c924c5ff65"
  },
  {
    "url": "static/img/apple-touch-startup-image-748x1024.png",
    "revision": "ecdc6e89a75eeabd121bdef870c0f96f"
  },
  {
    "url": "static/img/apple-touch-startup-image-750x1294.png",
    "revision": "6fe6059b1bc480589f8c63f244c1582c"
  },
  {
    "url": "static/img/apple-touch-startup-image-768x1004.png",
    "revision": "b472048f5ef1e4ab0e71c5b4b200d00a"
  },
  {
    "url": "static/img/coast-228x228.png",
    "revision": "b96779ef4851a34855491b652367a933"
  },
  {
    "url": "static/img/favicon-16x16.png",
    "revision": "eab4c21a59ded16f7ae43254fdc6401b"
  },
  {
    "url": "static/img/favicon-32x32.png",
    "revision": "e92aeec058380d5f19eb42096d650568"
  },
  {
    "url": "static/img/firefox_app_128x128.png",
    "revision": "5bad7b3b4a7f307018f569bbf4c9d038"
  },
  {
    "url": "static/img/firefox_app_512x512.png",
    "revision": "72bc00f3327509f6475f85606de7d93d"
  },
  {
    "url": "static/img/firefox_app_60x60.png",
    "revision": "91c4c7e39a84f07e4ec31951159a36b7"
  },
  {
    "url": "static/img/mstile-144x144.png",
    "revision": "8bc62b2b6849e956715372c2e680530e"
  },
  {
    "url": "static/img/mstile-150x150.png",
    "revision": "a77dc994c566e7dcaa539252016c6a3c"
  },
  {
    "url": "static/img/mstile-310x150.png",
    "revision": "4db4984ca6f5221626672121544c981a"
  },
  {
    "url": "static/img/mstile-310x310.png",
    "revision": "cc883201f81b3856702d08926f46175f"
  },
  {
    "url": "static/img/mstile-70x70.png",
    "revision": "67c87fbbba6cda1ddd4b7400cf342f97"
  },
  {
    "url": "static/img/yandex-browser-50x50.png",
    "revision": "942af22509298a93af5169b1a4c2a733"
  },
  {
    "url": "static/fonts/roboto-latin-100.woff",
    "revision": "5cb7edfceb233100075dc9a1e12e8da3"
  },
  {
    "url": "static/fonts/roboto-latin-100.woff2",
    "revision": "7370c3679472e9560965ff48a4399d0b"
  },
  {
    "url": "static/fonts/roboto-latin-100italic.woff",
    "revision": "f9e8e590b4e0f1ff83469bb2a55b8488"
  },
  {
    "url": "static/fonts/roboto-latin-100italic.woff2",
    "revision": "f8b1df51ba843179fa1cc9b53d58127a"
  },
  {
    "url": "static/fonts/roboto-latin-300.woff",
    "revision": "b00849e00f4c2331cddd8ffb44a6720b"
  },
  {
    "url": "static/fonts/roboto-latin-300.woff2",
    "revision": "ef7c6637c68f269a882e73bcb57a7f6a"
  },
  {
    "url": "static/fonts/roboto-latin-300italic.woff",
    "revision": "4df32891a5f2f98a363314f595482e08"
  },
  {
    "url": "static/fonts/roboto-latin-300italic.woff2",
    "revision": "14286f3ba79c6627433572dfa925202e"
  },
  {
    "url": "static/fonts/roboto-latin-400.woff",
    "revision": "60fa3c0614b8fb2f394fa29944c21540"
  },
  {
    "url": "static/fonts/roboto-latin-400.woff2",
    "revision": "479970ffb74f2117317f9d24d9e317fe"
  },
  {
    "url": "static/fonts/roboto-latin-400italic.woff",
    "revision": "fe65b8335ee19dd944289f9ed3178c78"
  },
  {
    "url": "static/fonts/roboto-latin-400italic.woff2",
    "revision": "51521a2a8da71e50d871ac6fd2187e87"
  },
  {
    "url": "static/fonts/roboto-latin-500.woff",
    "revision": "87284894879f5b1c229cb49c8ff6decc"
  },
  {
    "url": "static/fonts/roboto-latin-500.woff2",
    "revision": "020c97dc8e0463259c2f9df929bb0c69"
  },
  {
    "url": "static/fonts/roboto-latin-500italic.woff",
    "revision": "288ad9c6e8b43cf02443a1f499bdf67e"
  },
  {
    "url": "static/fonts/roboto-latin-500italic.woff2",
    "revision": "db4a2a231f52e497c0191e8966b0ee58"
  },
  {
    "url": "static/fonts/roboto-latin-700.woff",
    "revision": "adcde98f1d584de52060ad7b16373da3"
  },
  {
    "url": "static/fonts/roboto-latin-700.woff2",
    "revision": "2735a3a69b509faf3577afd25bdf552e"
  },
  {
    "url": "static/fonts/roboto-latin-700italic.woff",
    "revision": "81f57861ed4ac74741f5671e1dff2fd9"
  },
  {
    "url": "static/fonts/roboto-latin-700italic.woff2",
    "revision": "da0e717829e033a69dec97f1e155ae42"
  },
  {
    "url": "static/fonts/roboto-latin-900.woff",
    "revision": "bb1e4dc6333675d11ada2e857e7f95d7"
  },
  {
    "url": "static/fonts/roboto-latin-900.woff2",
    "revision": "9b3766ef4a402ad3fdeef7501a456512"
  },
  {
    "url": "static/fonts/roboto-latin-900italic.woff",
    "revision": "28f9151055c950874d2c6803a39b425b"
  },
  {
    "url": "static/fonts/roboto-latin-900italic.woff2",
    "revision": "ebf6d1640ccddb99fb49f73c052c55a8"
  },
  {
    "url": "404.html",
    "revision": "908733d6c23491206c9f4a1b44af05e1"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "24bb5b943cc0472ea4f789aab1b6aa2a"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "aeeaaf786ec3abadca150dbf28e73ed1"
  },
  {
    "url": "categories/index.html",
    "revision": "7c934b7771765853b6d64c3a3deafc0b"
  },
  {
    "url": "categories/note/index.html",
    "revision": "456d6e98bd2bf351b053bdc49f856b4e"
  },
  {
    "url": "categories/others/index.html",
    "revision": "4f199ddd271477b994fbfe9f931534ca"
  },
  {
    "url": "index.html",
    "revision": "2c5813b3a1720ee1c3afc2c065ac8b56"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "00d29f6f554593cabc9e03f732168ef3"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "b48dc9dc35c18a053d89d798fc4378f0"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "ea8319c00c184118f19c56d2b7f12df6"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "5f8005b243db00774a8a7ce2296bfee9"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "d57a6de519d7addc5f22d00039cd35ad"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "fbbd61c7c19b5186539674ed24d5ae2f"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "374b3bc230055f62170a43e049a4f535"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "56a266fbd4b5d0844a991397aeac7acf"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "6e2bc2f8b62a929aead0534f7a62bb05"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "51bec472e68f8c838c56b268b2787699"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "a433af7cd568a41a50d40aaac79f888e"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "03383f65bd5230f4c69376aea4781e5a"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "603ca3d740fdd85e82f6f7f9f389e300"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "f63c1240cccf86f3b7bafb5215a08409"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "be9f91b8cd1ca6909f33504a035e9097"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "8cf2b43df8b6a45b7efbb0c995e1ad2f"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "a9f06fa7a5239d0d1dc454559bc18321"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "850477c7c3c220e3b02820b31af4cd3d"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "8f4f986a9c17c5dec228d9cd3a7cc01d"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "32d5b51036e10aaa36a4a3e78d74a1c6"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "69f7accb16849341369b3f7d52254637"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "7b88c0706eee029187489eefaf0f1e86"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "12bddcb137bf190de5417d5bb768d8a8"
  },
  {
    "url": "posts/index.html",
    "revision": "7cd31c1a1f984e110c4fe07ba0066930"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "bc78f2a159b478ee354a4afe0dfb02bb"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "098345c9ad6e3df99b9e8f179dffcc1c"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "d7ae87c377c705222e91babdfe59b630"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "62b60b9d21639086387b1da19b5413a3"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "7b62543c5ffe75745133e9e6d2ae270a"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "e0c6a5fa4f26ada9a9ec782fa0cb91f1"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "b3b01c7dd552f2c252e05fa0f669051c"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "9d7297b6acd8fc7737bd85d0234de7e9"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "65c8ab5efd5dca33f10f29d0128b73ed"
  },
  {
    "url": "tags/github/index.html",
    "revision": "3af9b990fdb222bfe4a94da6dea0318d"
  },
  {
    "url": "tags/google/index.html",
    "revision": "3df4b5e2a3c0ee8fa5e992a2fa9fd9ca"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "347d496d1233b974e0cc6b4c18fdb773"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "aeb48018b98657324c4351a04674b862"
  },
  {
    "url": "tags/index.html",
    "revision": "952737573aaa0eb11ebfd4e873cc55c6"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "23844c42a2e156dcbda018ddbf960c1d"
  },
  {
    "url": "tags/java/index.html",
    "revision": "3a41242bbe4b91a09f8a9700fc9dc8bc"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "6e855a4f4934034ab276f4e97f02f376"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "c4fde89c91277e0b9c98e911502ab9fc"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "e399ed325921e62c3d00619fd721e7d9"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "ec85499da5c61f3a2f35bcacd562223f"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "be5c1c2bb2546496577b4965560c8d4c"
  },
  {
    "url": "tags/node/index.html",
    "revision": "9aa8234e7244a2aa1efd9a051f953f38"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "0432c0278fc2204e7f3a4fd43b1e0c90"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "7a0921e034ce2bc63d345995102b5bfa"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "e891de1e4b258b857ea8060784abdb44"
  },
  {
    "url": "tags/security/index.html",
    "revision": "53784c9379b6854a834f39e81c5d3c41"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "636748f5b083a6053760a6f02c791a6e"
  },
  {
    "url": "tags/site/index.html",
    "revision": "ad541036a8f14b130650d87bb5c1cdaa"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "673698b09393e39a5e205dbed2139557"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "0f3ba4751626e1b50b7367e9fdd40f29"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "8fb50e2878249d9cb5ed4ee856f21147"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "54c555d0fab8673b8dcc87f4d0d29d37"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "96d627b8d0583aafd1ff0ac0e0115e56"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "4a5c5fc1f4e237b55ea24eaace66b728"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "55a39241eab48c016d2d28bde9871494"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "de67d706aa4467ff3a9ddf83cd9edc3e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize({});
