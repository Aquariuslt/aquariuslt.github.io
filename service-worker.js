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
    "revision": "7e80be837c2b5469b74f38229aecb685"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "6d1c256f8bd0c5734c7d6122b3cc7505"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "caab102f79c9d9453f27701f76b9b870"
  },
  {
    "url": "api/categories/note.json",
    "revision": "1867336d2413b05747e10c1669707346"
  },
  {
    "url": "api/categories/others.json",
    "revision": "96c1c884f6127eca7cc5095d6d34cab0"
  },
  {
    "url": "api/home.json",
    "revision": "413ead487734d813e18b6fe2ac14ba77"
  },
  {
    "url": "api/navigation.json",
    "revision": "201f19f6843bdbc78a163971b2fa5667"
  },
  {
    "url": "api/pages/about.json",
    "revision": "767db23807af6cc8976292777bbd63bf"
  },
  {
    "url": "api/posts.json",
    "revision": "1b56fb14cf04c1d72607064b1d6ca6ca"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "7c2c80630d4b21fa81510200c6041e45"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "2861c136874becc8c8c57874fc409954"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "194765e8b52bcfb82fb4e52517bcb538"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "4df67d101c13fc90561072629a099772"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "392282843aa4f41881bf1d1f1fcf9ae6"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "304c57421c101caea6aba8a48c84e65d"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "f3ea027ea470e16ecd242544846ad7e8"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "8994cd9a37ab9127f8805adda049ebce"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "127a8c2fc94b7b6810e4c0c72d179c13"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "373ad304d6c0dafdd51c1e6a40e52907"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "61956634f37d85f6f02fb442315a73a4"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "97ec508f674fcb5c8343c8e232d28b42"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "6ca2fd30e5eeed1e384829ce51e63a8d"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "dc591d96e43382f79a450604a7b6f4e9"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "13b46819de2313a6e64617246237e794"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "d2d603e3ad03e0f1ac8573a59dfcdfe7"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "be5fa4eeda1705364142c797661186a4"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "b74a4adaee258c6bfc92066a583279fc"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "410fd8f775d8a0ad54530b5f1578c0f9"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "747d4528e9dcc06db5e3e8ae09e20460"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "9ac7bc729cf41f9194303cb04c74ddd3"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "7f108358ff893cb4e986c9b1395c81cc"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "a7d33195f289a81c3635b94ddff0b687"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "fc025c3b67ccfca5a3d502f48f490a25"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "cce86a2994f164d31307350c1022871f"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "8f741cc18d975f514989ea6ec0b16cb5"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "a9f2bce051e343127bc3a9892a18da7a"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "f95bfba1c3580637579912e4bf4884c6"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "5f3b82eadd493fe9c7ed07837ecfd35a"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "f4aaefd319d7e6e7ed3dfef9e49755ad"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "4ff3e654183e91dccfe3fabf47ebf47f"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "5727be141445d1c683521cb1a8a1469c"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "bff973725ca3591b93b8bd0fa41582b9"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "b4753936d5184c117d2de812b803c4c2"
  },
  {
    "url": "api/tags/github.json",
    "revision": "ea52e0cd7d4c3165a54a733f40b7b165"
  },
  {
    "url": "api/tags/google.json",
    "revision": "ff5190410a1f3fa81230355fd975ebac"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "8147da95cb7c79debb1315ef86b060d9"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "8bd5d48b55d5d1a73484b320455a8c0b"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "79102436f0f08eacc9e5c9c5f83c76ba"
  },
  {
    "url": "api/tags/java.json",
    "revision": "8420d35ca1d12bca6c0d4f7cef2028af"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "2dc8238917377b47bbc7e5a5d2466a61"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "8d6d14c943eee255a80743e46de6d3f7"
  },
  {
    "url": "api/tags/jest.json",
    "revision": "11e27988b1731d2dbb673ad07b3eac3a"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "047310c94a7ff04f3a3947784a9af335"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "dab2e2724b3921b9c61ca23a1d82bbce"
  },
  {
    "url": "api/tags/lerna.json",
    "revision": "b986e542067deee3660a78872918d4e4"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "639bdabd04fbb5c4af506450f527b83e"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "7eaaf8715f28fcec01ae2b041db324e4"
  },
  {
    "url": "api/tags/node.json",
    "revision": "78b0a84bbbd47230695ca4ae3206d9e9"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "84ff3acaa64b630d247749f7c458095d"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "4f431cbbfe0f43dfe0f738e728f9a234"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "ad6319dc207779688dd0858053d25aa1"
  },
  {
    "url": "api/tags/security.json",
    "revision": "5303007046823d3994cd1f230a58fa5d"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "1bb2f394854dc57d0e64b35ee10ad738"
  },
  {
    "url": "api/tags/site.json",
    "revision": "f4d43a56f20b3715a30bbe2c3359a344"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "fad70f20204d4e4fb165cdd8f5322c4f"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "1b50642573650607397724271a2f62e4"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "80c95f31d760a6f3fc626fdf6dd6b4a8"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "e66c515248f5ebe9c501bd5eb31fdb73"
  },
  {
    "url": "api/tags/typescript.json",
    "revision": "2f0a3a2c59e43a0bd533f1cd8c4b44fe"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "c739eca43e8cb3850d92df164fa05f98"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "c7c7043abfe854865c94a76ac5b53125"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "d07e3de122bcf887cb8aadf4f7041b3f"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "fec2c59ec4547ef4fef372625343480a"
  },
  {
    "url": "static/css/detail.dbd5f952dc980ed92796.css",
    "revision": "89b75f8528cbaa587cba7d2163f8b001"
  },
  {
    "url": "static/css/main.89b73aba0794f0783fd7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.178c4c93919df014651c.css",
    "revision": "2af97cf84b103023b4cb97daff882b9e"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "37afcb01d0640b6635a9e318429bb03b"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "d1951bfdebdc43f2ee4ae1edfaff1990"
  },
  {
    "url": "static/js/detail.dbd5f952dc980ed92796.js",
    "revision": "95c3c5f8152c574bef5816b95e139474"
  },
  {
    "url": "static/js/main.89b73aba0794f0783fd7.js",
    "revision": "385a4ad9102c0d445846cd864f369caf"
  },
  {
    "url": "static/js/vendors.178c4c93919df014651c.js",
    "revision": "08083439131c05c39745122a0d20617e"
  },
  {
    "url": "pages/about/about.png",
    "revision": "630026ceb9ed8d111831a9abec7b7598"
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
    "revision": "a58210d9a6b47fb694fe04b8cbbe312a"
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
    "revision": "6c0734ee3229249adcafb500257cb7d1"
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
    "revision": "e0a8656ec13e06f6b039ac6e13b743d2"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "ad0df58b3619051a7ea4ee5713a77a6a"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.png",
    "revision": "0190666a7dc832afd1d7d47aa9461e84"
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
    "revision": "7d8cec8431e367e8386bac3e2093e95c"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "2820c9faa1b1d0166deee039330fe691"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "6378645808601fec6026fa5c1c67c9b8"
  },
  {
    "url": "categories/index.html",
    "revision": "0c04e11bd477d61e7868b145f3fcaff4"
  },
  {
    "url": "categories/note/index.html",
    "revision": "69b9255acaed0ca9c3397ca9a8cb3620"
  },
  {
    "url": "categories/others/index.html",
    "revision": "15b8a97ffc95868c40e74c16dc7c0277"
  },
  {
    "url": "index.html",
    "revision": "2c707264e8c6e2b35d1ea4fa9ec8863b"
  },
  {
    "url": "pages/about/index.html",
    "revision": "95ae0fcb281c4d2a0afeb3a7f12f536a"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "8e8995bdf3466503f45e38d705300a6f"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "f72b86381ad4f9d204b0393d1015ef28"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "eb03e644b76b22615de2c978e0694af9"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "86d2de9209a895332dce2b4477b91439"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "ad78da1c67b4bc9c85ea9d9a52236eda"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "fa5b87fe09d5bbea76be641325cd6822"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "df5f7f461ba1da20f6c2239939583d9b"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "9ba7bbadb7be380dd7ee0a2691452466"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "89d74ab47910e7f731233a6a3c249bc6"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "8b667d4ba541b17daaafbc756831d513"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "beea305cfba81b141618fa3b4edc97c1"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "f233524bcf1e286e3899d8f99abca595"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "1a29b66bb4ad4b2bb1914a111ff76b81"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "092772ae725f56e0400fb3a10f05e42d"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "d84dd1f6c7ca5c51b6c640b3decf5d8a"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "1ddf5593d01dea8192216923bc6c8ad0"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "a282325151a51c1b1b983c12455d767b"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "9520ff48b1a1e5ed2d8b68770044dc6d"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "e194481eb2fe2a971a7adb8e80011c2a"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "41edbc096a9c4ea906ed0c812a094547"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "1f205e8442f5e9141da5875bc1f5b9a8"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "2f2b7437787988b4bed00ae86e1d80db"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "4bcba29373f52df966c351d8be4a4934"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "148281c4e90419c873fca26520cdb986"
  },
  {
    "url": "posts/index.html",
    "revision": "90527f84759e75aa888591f3e4f2f6ae"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "2e85c0632c51597dd44cacf72293b57c"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "1dc32c719eecce2223ae650fd9fd4441"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "7a410f0ab292b73a04cc4a9e1b27d9dc"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "608526c9308f834543727d812e239328"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "b7072190188358c6d3879b2f671d39e3"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "4d37a986cae8c252fd585aac2606cb5c"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "29a74000f071112914f63b0ce12fc9f0"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "6cc0d55437a54818bdb791a73a9db592"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "e1be2f461cf8ad6449930d28e4f1dda0"
  },
  {
    "url": "tags/github/index.html",
    "revision": "f57c2e4010a7c92fd363bfcaac01eb8c"
  },
  {
    "url": "tags/google/index.html",
    "revision": "d4da34a6b18d5bd1cef58f233407669a"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "c3ad828409e13f51515d9587e2904fb5"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "cf7c3ce1f32171790705bf785e3e4206"
  },
  {
    "url": "tags/index.html",
    "revision": "354298dec53039d60b7c502c15ef3c58"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "a381dbd8ad4449aea469da998a7af023"
  },
  {
    "url": "tags/java/index.html",
    "revision": "1e1633c544c2a3ed078a634e6b811486"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "21fa2fb312e6c24fd06b7174ac55bf77"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "f0f47a6c01d8183a122e9dc600ca15c2"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "2bcd34effd4b153ad79853a37a05ab68"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "08a8507639ae7fc401b46f4ac06f9c61"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "a5e67b1d609f33524da4490bc959914e"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "2ece8a98c0adfbf0cd3b3dc4e7439ac6"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "bcef57b26ee06bdd15e941e66ebdba00"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "8c3e24dc5282d425f94ec2f59f0c15a9"
  },
  {
    "url": "tags/node/index.html",
    "revision": "007299b549cbc6c346f5d9f92c601a11"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "6307c7b671095443345d49265587a312"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "f8c7333f18d6fa2338712b54ee5a8ed9"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "6ca1b6917649e5e6e977f1d9f28e5a16"
  },
  {
    "url": "tags/security/index.html",
    "revision": "ae4e76fce3f342b6b35c3bbaaa77f5e8"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "891de3d26e9a6977caa284ee58af43c5"
  },
  {
    "url": "tags/site/index.html",
    "revision": "7dd4fd258d474b236254952e278e3b77"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "9c89185c879716b15a4d79e1ce7d7723"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "7a1a607e6e4ff1c25aa3c674b5cdb0c7"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "25f2de82ee0dad24706b44c10f048bef"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "7dc3a667edea5ff6e64d1788173785a7"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "560ed8ad821685fb344d9eef92988b69"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "aadaeaf302e89c1e14028f612f4ef84f"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "939511aec99a0925622c6ad5ec9ac74e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7cc3e2093d88a5f69a0d078698b65dd2"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "5d164a334d7d6628edce8d2aa9e2fe9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize({});
