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
    "url": "404.html",
    "revision": "f4bdc69c85ea2ea24dcacf4aed8dc3f2"
  },
  {
    "url": "api/categories.json",
    "revision": "d03d763fd3f6fe87bf11c6f3fc98b2ca"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "6166d05bb2c4d47ee0e63919acf9b4f1"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "1fb50bde5c16f9032a2b774c45fc5057"
  },
  {
    "url": "api/categories/note.json",
    "revision": "cadf2de2f9a655eaefe8b4543ad7a19f"
  },
  {
    "url": "api/categories/others.json",
    "revision": "72d175c54df8de1d3eac90c579d6c898"
  },
  {
    "url": "api/home.json",
    "revision": "0c129bcfa43f0cd4822d44514365c56b"
  },
  {
    "url": "api/navigation.json",
    "revision": "777ced3dd3855b27d95d505bf20e3351"
  },
  {
    "url": "api/pages/about.json",
    "revision": "0ff30c4fcf02e689fb0c56d707c2e897"
  },
  {
    "url": "api/pages/projects.json",
    "revision": "cca8e7d251b8c4a71c75c94aeb5232ac"
  },
  {
    "url": "api/posts.json",
    "revision": "9f2280493126b85ac8be02dc29b635c9"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "5e32cfff242c6b5ac47e37d8dd3e46ce"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "2f9be12fd9f4346aa0dcf55f6161f011"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "c8b508811724ed156bb5805b17358c7b"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "7e481084a0a0ed4bf0ab1934e223a52f"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "24cdbcfe6ba40b18b8122a6d73eb4a6c"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "13c6482a8c51607937e3c1a45f66baf7"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "6a9df2cd8bff0c064f289719cc64bde2"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "ffdbbbc318b6e024d155b1d51f3c9b91"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "c10129e3f313e9394b0fa28826ce7e42"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "ade1af77a433a62773f844d58be95813"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "b67fbfefe333e87d1829e5e645bce7be"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "92c116d61f6dd0d4d9a8f8be0f4ed696"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "12d8bd130b89cd37309b309d08108dbe"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "119c120165b685d9bc7cc9979fa6686c"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "fe27d34c7503cf7799e207a90a21cc70"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "4592db6c620a3b6a70e72df7800bc736"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "89418fdc80bc0e99e65e6dd2cff468f7"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "d40bc4ad6258d35532aae877c924c642"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "2f0f83fecc7c1057b9453751c9fd0d94"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "af923d0f70293b3415d7be523958d598"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "654f62e78759b17cafa07678b5a17024"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "6a07e014ae78e1977cf7b946281523ea"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "ff0ece78938c664eaa26bc56540dde52"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "c87b3336a2fc0f8f319727d8dde78697"
  },
  {
    "url": "api/posts/2020/01/28/review-2019.json",
    "revision": "4b54e6e68d06fe83914dd912e467618d"
  },
  {
    "url": "api/posts/2020/02/12/using-patch-package-patching-node-modules.json",
    "revision": "8d050ea63a572babc66b82a03c01dd9c"
  },
  {
    "url": "api/posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate.json",
    "revision": "946f21cf4bbc6bb5aa4d4a2896ae2cd4"
  },
  {
    "url": "api/posts/2020/03/15/dot-ignore-management-for-npm-package.json",
    "revision": "c18b211adef1abd9f5a6cebd3a5ad526"
  },
  {
    "url": "api/posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update.json",
    "revision": "ca2038800fcf8260290629f9291c1a6d"
  },
  {
    "url": "api/posts/2020/04/04/using-bundlewatch-instead-of-bundlesize.json",
    "revision": "629081fcf32bd7ff0a3d2c0b7727e3f1"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "be023dc236a7f25f5defbad0130e5a4c"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "f1ff162a12e688aca1cc1333b7f7c5d8"
  },
  {
    "url": "api/tags/android.json",
    "revision": "885a0286ae0ab911d17e68d01778c4d4"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "3fc3babc0baaf9258e5271174b10d57a"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "bc16b5882775fc27a4990ac5bd6d40d5"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "7a439f502dd3f7c9d271cbc79e593368"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "ec89a069ba0e7b4edcc835ff66904be5"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "e2d35a69902dace1c65b910fbaf69e7b"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "a2bc6920fa3ff4f1a49d05ece4a4e301"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "cca9fbf43c59c9fc896d26666008dc97"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "de25dc20b43067916f612cfa4ab2a64a"
  },
  {
    "url": "api/tags/git.json",
    "revision": "831ceed530f91d695f14bd33c11067ed"
  },
  {
    "url": "api/tags/github.json",
    "revision": "3bb0a986ede0895e10fb2412d50b07e1"
  },
  {
    "url": "api/tags/google.json",
    "revision": "a03fd6becd3d13420d0c6bc57ae68614"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "d24bff878c1508d26d10a045d6beff3d"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "3ad0e987ea26d28b2ccf4bf3b5c100bc"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "8d7b130eec19832181c91021a1bf7fd5"
  },
  {
    "url": "api/tags/java.json",
    "revision": "f0372a6b8056d53debd04cf589c65abd"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "1991ad11bda9e8982675eb4bf1eda961"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "f9546af84221493ea04170e9d93e3f24"
  },
  {
    "url": "api/tags/jest.json",
    "revision": "41adffedfc9640474f3ffaa398fba124"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "b17b2ec449e7b92a7878a370db2564ac"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "dd00b357977abdf249d3fd5b5c00f978"
  },
  {
    "url": "api/tags/lerna.json",
    "revision": "80292170694745228f4c281672c9c773"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "3e36722caff755975dc589ecae47730c"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "66f7b5d0ee012ffd51ccb300e87e554e"
  },
  {
    "url": "api/tags/node.json",
    "revision": "8b9d002e3d0e1cfc9bc99c7e8f1968ac"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "dcf242b877d23316ce663cf4e660d7c1"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "23f8fc7cac8f02db75d3d8ecaea21892"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "29dcd0beab3cf26623b76378ef78c334"
  },
  {
    "url": "api/tags/renovate.json",
    "revision": "ee2e221074606c50a52a8374f9d97159"
  },
  {
    "url": "api/tags/security.json",
    "revision": "ee0fa8f56ed3f7d50a16e9b853e2a93e"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "89660c81d28165ac54cc52963f576d42"
  },
  {
    "url": "api/tags/site.json",
    "revision": "58494b0bb7b71bcd273bbc334c99e028"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "3ededc4cfe68fb49de79e7699a40bded"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "ee2ef7286cf62e047e3bfa6a9d7f0dbb"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "018b93e0beab2a79d452f5940f397dc4"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "d58cc6dbae2492d57fa9b14c52983bca"
  },
  {
    "url": "api/tags/typescript.json",
    "revision": "0e6086f94b70135ac389a50c1170d5fc"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "70d48e474b840e9894191768affc7d1b"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "a757a56209ca220e4b4996f927f07011"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "97071284339a26c43a556daeb3041b5f"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "dcb79e87cc86e2a7d5f46fb3ec46434f"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "9f363f816500a35b97dbc274372026a9"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "a1e22a202204ecd0a62c890cfe818447"
  },
  {
    "url": "categories/index.html",
    "revision": "ed1b4edb016c407774816020b68daaff"
  },
  {
    "url": "categories/note/index.html",
    "revision": "3cffc21a4253861241ec64bc77ef099a"
  },
  {
    "url": "categories/others/index.html",
    "revision": "3f813dbbe6b2188afe553951d8d7dfbb"
  },
  {
    "url": "index.html",
    "revision": "38d6de851a6632736b90302a80025953"
  },
  {
    "url": "pages/about/about.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "pages/about/index.html",
    "revision": "b169f6167800ef8b0b9e5ce68268ce5e"
  },
  {
    "url": "pages/projects/index.html",
    "revision": "6c96750a64fdbd558aa7f5ef92413e07"
  },
  {
    "url": "pages/projects/projects.webp",
    "revision": "3854088a748a9cf8ee07e75e00a7ab92"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/cover.webp",
    "revision": "f7899b4ddf1f5ae1d53df8f4b00d1089"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "9daee3a63319a767cdc7dd73c382a71a"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.webp",
    "revision": "27d279d60cf8f2f3f3c5ef160228a7e2"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "354f7b9b7383e5571985d8ef323b6a9e"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.webp",
    "revision": "de249effaf0897b3d42b2dcd003f7e90"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.webp",
    "revision": "7ec3862f288fdaa3d8dcf67eb87358c3"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.webp",
    "revision": "973711f94005d774cb8b66934f64d021"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.webp",
    "revision": "541e18fac27c3a6d3f92845da936634d"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.webp",
    "revision": "c5ee1a17abc3b9f70127ad3605d91cb5"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.webp",
    "revision": "82b11d8da0d24e605f641b00fc17e1f4"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "a155d254c7fdefea38bc6f1e90588dd9"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.webp",
    "revision": "e99152e447936ba8ba4266c923d10206"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.webp",
    "revision": "42c0728306c074aa92934b455a33c6f8"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "f89f482270d2fea16cc4a3e83437c58c"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.webp",
    "revision": "bc8df919c42129d27e82cf802a76e5db"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "610de82c4ab1f9094ae7b1f27d451764"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.webp",
    "revision": "a9baf6ab46fc8631bfa2fa1d7a2ac950"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.webp",
    "revision": "20a4ab3727e3fd86aec06d3608602bcf"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.webp",
    "revision": "308f0ce3c55a48b8994b77e6aaec720d"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "94289315dd360e6fb00381601ecfa66a"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.webp",
    "revision": "a058add589ab8b9135a4b382b82508e8"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.webp",
    "revision": "4b56f7ab6fb3d673bbbfc06f14478c17"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.webp",
    "revision": "5bf3975e2cbaae85d6c745766fb97988"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.webp",
    "revision": "ce315bcc2cd784faa7f11fc21fa07c0b"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.webp",
    "revision": "3a0c89c40828478d826ac0e70b0ea584"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.webp",
    "revision": "d354413a6b4efce07c7d3559ef2fcbcd"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.webp",
    "revision": "64d4667e214e87e10f975ad638da909f"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.webp",
    "revision": "121806d45048a0f04cd13f145cd3d2a2"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.webp",
    "revision": "978970425c26004ee8743bd1c9b0ce2b"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.webp",
    "revision": "c72cc5ad291f7ce4495f7c93c4b0cb93"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "afd06e556203a51a19f1ad866a19c41d"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.webp",
    "revision": "37910666b2efdaf400b00d2061f4c41a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "fb7cc3528d4ef4fa03fc8907ec50b3fe"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.webp",
    "revision": "f03889a93d4c73dab419d04d81565d31"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.webp",
    "revision": "ffbfdff8b8c2d81585449e1eb8bcc15f"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.webp",
    "revision": "bc6a909f7309631a6b03aecd82c17467"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "7047f3ce3bef584eb081c4c2c3e3fb5f"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.webp",
    "revision": "05618758af7e7de5158210b13e1b6977"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.webp",
    "revision": "591c0a0b385748771caa712abb9ff618"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "342969588125c0d6dc236bd5ce9d5cad"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.webp",
    "revision": "95426cb7d06416d7470401045fdb7e43"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.webp",
    "revision": "4be1e4140b27f7f5a0898f0ce3f1d501"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "2f070e3deff288c7fa07cfa138905a73"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.webp",
    "revision": "82c34fe6dc24d269af222c5886cb5557"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "d936bb11a87ba5524bafbb3e4c21c443"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.webp",
    "revision": "70e3a03015686c5d3d9d517b2b1ed007"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.webp",
    "revision": "4c957a7c5807674b1b25b15e007d7881"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.webp",
    "revision": "e7720cf9a75db38e575a7aebdda8cbb8"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.webp",
    "revision": "e5ee0679cb0e23122cc9c0246332629f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.webp",
    "revision": "88bc8f3b4253e34a3f231c9ad1d950fc"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.webp",
    "revision": "67063e4930321488a04e57dfba0bc4b9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.webp",
    "revision": "bda9b7c400a8ce2c2ce4e8f8b759659f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.webp",
    "revision": "85081ecbd048ffddb6c4848fc698d52d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.webp",
    "revision": "a4b28cb611ffae746279252c69738ee5"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "0c8ae8deb31c2fd16fbc9c67ae14d9fb"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.webp",
    "revision": "245ef36deea7090514346a72bcfab388"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.webp",
    "revision": "4e6a24c1f3ac768d3f063a3fcd73c856"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.webp",
    "revision": "a3b62b7d4661ff5dbbdb8f9cd83a588e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.webp",
    "revision": "4e8363e87ff0ef8c282623b8052676c4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.webp",
    "revision": "69c7a26d870bb2310a5e2b95ea860e19"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.webp",
    "revision": "d02c98376456067aed5299114ae6f526"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.webp",
    "revision": "8edba420019da44429ef1ef066e1921b"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.webp",
    "revision": "52a63e4b1e37c041cb6ed2bf85449039"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.webp",
    "revision": "9d08ab6cf95c67c8e5497a5333cd00ca"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.webp",
    "revision": "19aca6f9dc888644bc76d441da0c86f3"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.webp",
    "revision": "17f4be951155dfbd2fa663f44c7fd16d"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "5890b0600978e7e72cef524aff35e502"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.webp",
    "revision": "c933f777cbdb5dc55fa06adff69f69cb"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.webp",
    "revision": "9de8be83abd1952fb112c73079c55711"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.webp",
    "revision": "e2475c73b6be148ba060e15a9b4ccb81"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "8059d8ba21bfb3e003e019487bf5d8ce"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.webp",
    "revision": "4071e85ed69390fcb79dd56bd0d13dfd"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.webp",
    "revision": "dd28ed39982e50b21c57d1f2ba00b155"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.webp",
    "revision": "9cec7f77f285e0b345657fff32cdf189"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "aecfca5bf68d6ef4f05987bdad7a3f13"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.webp",
    "revision": "192a5a50789e7bb15de8469aad1e7047"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "2fd608fe5490aaa656884c0a77e0d753"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.webp",
    "revision": "d7ab2a9e891594c3aff55bfd3c7290dc"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.webp",
    "revision": "0a1f5a3eaf461a951e8d4ce2bba90ca4"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.webp",
    "revision": "309fc307b2f984c40b02ecbef70dd5e2"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.webp",
    "revision": "a6d7dc00ab41be0f1a6e87f4211715af"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.webp",
    "revision": "1e76915b3466a58bb7242ed79cdbf228"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "40c1953d3036626e912d4fc89e320c8a"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.webp",
    "revision": "c1566bac5de28dc40a0c1506a1107ce7"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "9f500c252d3c04821d850eab1f4e7eb9"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.webp",
    "revision": "ffe4011649708c90baed2f4b7e7aa21e"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.webp",
    "revision": "ea9f7743b2cd84574cd22ed25942b149"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "5ec5cdac435b2ae02def2a42a9b31671"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.webp",
    "revision": "79cabe1ec1e52c944c79da0c2b6e6a47"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.webp",
    "revision": "0cc8fb75d850e328ce1bdb9baba80e0b"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.webp",
    "revision": "477605f82400f608545e3c8d08a3d807"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "09d0e49f6470d33ca28586a9e2d33a75"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.webp",
    "revision": "118070ef6ecb23b333188f5055a29b95"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.webp",
    "revision": "593501b6abebdb69a419e8202e963d2d"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.webp",
    "revision": "1813366eaa17f6e019c1006fd30a61d8"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.webp",
    "revision": "e9c3eaef7f939a77ddad6284f3d86807"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.webp",
    "revision": "b845cce847a78b18ca5c6e35b9a0dc21"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.webp",
    "revision": "f8d0b4f6652d1451235ccf1e5a852b8b"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.webp",
    "revision": "96d1bcec2c67015d8cd5116b4c6a4d6e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.webp",
    "revision": "2c2ea1bfa858164937034796b48e4745"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.webp",
    "revision": "3e063515d4998f7f4d98bb6efe6a475d"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.webp",
    "revision": "61b7b4e82b27d3423b93647afcc90dc0"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "d170abce87613ecd093db970c817865a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.webp",
    "revision": "a6ba99941ffbe026a09b995e45fca9ad"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.webp",
    "revision": "b7b9516065fc6dab7fee4bddba9bb804"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.webp",
    "revision": "ca598dbd702bd95c0465a3333329b486"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.webp",
    "revision": "480f7329129edcb1bdfd34d7f183f23a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.webp",
    "revision": "cbd7e6af14b45b002a4a3d9a33dd708e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.webp",
    "revision": "4abbdb640e39e46c3a2520654fa79946"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.webp",
    "revision": "5d7406532a4b5af864ce8c3a706a9bbf"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.webp",
    "revision": "489c7da2b7814ff8a691b1447b69235a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.webp",
    "revision": "51c049e803384d402986160009af2d93"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "10661480e9ddd4a24d44fa8f6dd3aeba"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.webp",
    "revision": "0d85ce989bedf5ed9d5010f1eb97064b"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.webp",
    "revision": "08647ee4856f25ff6467ad7a1f6471cd"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.webp",
    "revision": "5972a2b30409ff8ea98aefd658f679f6"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "fa3e39a4c58c37ae09a61b7e7d87825d"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.webp",
    "revision": "d31fe316bda1a37a3b8262c359ef0b07"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "76eff16a0cb9bf2f2bf08d1c1a2962c4"
  },
  {
    "url": "posts/2020/01/28/review-2019/movement.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/cover.webp",
    "revision": "63078ecf97da8ff1d2e5a6e60ffdd814"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/index.html",
    "revision": "73bea5b19fdf37f04505d2e70e8fa88e"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html",
    "revision": "4192bbd8e68524c5343a9efca961533d"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-circleci-docker-image-support.webp",
    "revision": "a75f6754f1d91840199f7441990c5583"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-setup-pull-request.webp",
    "revision": "55b434b3e7479e71e38e0ec9ee4516c2"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate.webp",
    "revision": "7727e6936b150ed77fea4325249f2664"
  },
  {
    "url": "posts/2020/03/15/dot-ignore-management-for-npm-package/gitignore.webp",
    "revision": "d0487820ce1cc34fdaf109f118560085"
  },
  {
    "url": "posts/2020/03/15/dot-ignore-management-for-npm-package/index.html",
    "revision": "6ec3f2cbd432c759085b487d399d6f20"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/check-motion-sense-at-settings.webp",
    "revision": "8ac29e207069302760b90c85d1a02f00"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/index.html",
    "revision": "e0a2247832d5cacc4ad3e0fd24c95327"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-patch-boot-img.webp",
    "revision": "b92c8b2f7f90e98b3151c9695ac894ef"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-patch-image-step-1.webp",
    "revision": "26558a34d8e0ea975ceefaedc88b488c"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-patch-image-step-2.webp",
    "revision": "70502f51d57552d2e14e216715fe5afd"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-superuser.webp",
    "revision": "df974debb093ded9daf40f824b879c92"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk.webp",
    "revision": "a460d0c440e1db22eb64557b74e895b6"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/motion-sense-skip-song.webp",
    "revision": "b6c1630ed35d0845136b1b9c279f264f"
  },
  {
    "url": "posts/2020/04/04/using-bundlewatch-instead-of-bundlesize/bundlewatch-graph.webp",
    "revision": "2fb927dd803cad5e6cef1e7d6d884171"
  },
  {
    "url": "posts/2020/04/04/using-bundlewatch-instead-of-bundlesize/ci-commit-status.webp",
    "revision": "fe3d34f5df25039325ecc8d029ab431a"
  },
  {
    "url": "posts/2020/04/04/using-bundlewatch-instead-of-bundlesize/index.html",
    "revision": "3bb7373c665f4022d42798b1bc7c0f41"
  },
  {
    "url": "posts/index.html",
    "revision": "802b4bf48f24135a732f58f92722f1d6"
  },
  {
    "url": "static/css/detail.d2f4dd3f2e30af202eed.css",
    "revision": "4784b90b225073ce134e8667e56c6cfc"
  },
  {
    "url": "static/css/main.b96d1a269553679f369c.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.c3950a6d8578acb08709.css",
    "revision": "2af97cf84b103023b4cb97daff882b9e"
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
    "url": "static/img/manifest.json",
    "revision": "9c64b9ed3bbc8cc31b9e55e167cd3bc7"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "208a5dd17e5e11ef1c7f942237a8a5e4"
  },
  {
    "url": "static/js/detail.d2f4dd3f2e30af202eed.js",
    "revision": "3f67441944aa00f29ab4a4490261df1c"
  },
  {
    "url": "static/js/main.b96d1a269553679f369c.js",
    "revision": "ae05cf4c100d2ba9a736cfdeea026945"
  },
  {
    "url": "static/js/vendors.c3950a6d8578acb08709.js",
    "revision": "25c7ea6714c316a04b9e0ce32abafe9e"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "d6fccafed3553bebeebda5839263fab6"
  },
  {
    "url": "tags/android/index.html",
    "revision": "21682f5581f908fcf03f07fd2556edb3"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "fd9077ca518616e289c40463e9750ca0"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "5b4e9d29e4566b303036cbe8c647748d"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "8793b90e1a2f062cc53b3375d193f3aa"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "22d585c13d5ab715a7d9cc7f1a7e139d"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "6c0412a615d4a3313ed3572f72177520"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "59effaaddbf515d10444cbd8a5387ed8"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "5e127b1b4a717fbfa07c8b3b094e02d3"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "ec1b1344d8d30d9f8e6fef931dd90ac8"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d36bf588d499a658a2a6ab4f196d091c"
  },
  {
    "url": "tags/github/index.html",
    "revision": "46373700d206f9e6b1958feb70306253"
  },
  {
    "url": "tags/google/index.html",
    "revision": "482692f87bb9fa94f77366c3b5c0334d"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "5b2ce93e6650ff2df720441bf1058773"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "5467b569197bc9604a7e3d0c20f5e2b4"
  },
  {
    "url": "tags/index.html",
    "revision": "00d3d800b6536b8ab3c3787474189691"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "300e5fbd89b62d4913504f2bfcd512af"
  },
  {
    "url": "tags/java/index.html",
    "revision": "e40c15f102a96fe217deddd44b3f9d3f"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "be57483e1b6a9c0526f9823daa38677e"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "c4321c9701c3a9a1d316adf64520198c"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "dd33a6b7bff224a2050b5728fd8849f5"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "8ebf306051f2fef5f12ca515a3b94adb"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "0858adace12af8d705d8e6cc7f1b707a"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "3abc7ad90e80a9fa85683d1aa73e6875"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "4f3bcf2d8227dd7065408c31aae8cba0"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "c2380e8644eba26d1b2bd68a2278385e"
  },
  {
    "url": "tags/node/index.html",
    "revision": "06b7d052010c1a00e855fc0b96c4e80a"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "a134dbf708497d4612ce2d972239caec"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "19ac4fab319f64373352f7b35358e0d6"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "156eb004c58a6e2eef6e2da06d6b3619"
  },
  {
    "url": "tags/renovate/index.html",
    "revision": "5d52fb1411aec4eb94991d3d14274f87"
  },
  {
    "url": "tags/security/index.html",
    "revision": "c821fb3345d4adc235282beb175032ba"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "164f28d06e61e69ce0f8f9bf32565637"
  },
  {
    "url": "tags/site/index.html",
    "revision": "aa85bc409edcf870830bc60cd2fd98e5"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "839aad69113203b2baf622eece30c9a1"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "ab34a491f9ccbf29e0627c84498439a0"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "dd0e1966d6aa96e6b6263110fb338428"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "c6d15cde1e3f8a5d78c0f92de1888f0b"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "4289e63c2ccb8cccb7860a969137561f"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "eefa0c6ce5c90a41e7a1c4133edb5030"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "31dff05a7f9283de8a438cd3f533cbe9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e0c0934c31a00fadf439d4b0e0aa740f"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "d41ca69a9104508064c47b40746f8f2c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
