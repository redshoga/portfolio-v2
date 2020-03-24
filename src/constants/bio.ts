import { Props as HeaderProps } from "../components/TheHeader/TheHeader";
import { Props as FooterProps } from "../components/TheFooter/TheFooter";

import ImageIcon from "../assets/images/icon.jpg";

type SectionBase = {
  id: string;
  title: string;
  description: string;
};

type SectionImages = SectionBase & {
  type: "images";
  images: {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
  }[];
};

type SectionLinks = SectionBase & {
  type: "links";
  links: {
    title: string;
    subTitle?: string;
    url: string;
  }[];
  footerLink?: {
    content: string;
    url: string;
  };
};

type SectionList = SectionBase & {
  type: "list";
  list: {
    title: string;
  }[];
};

type SectionHtml = SectionBase & {
  type: "html";
  html: string;
};

export type Section = SectionImages | SectionLinks | SectionList | SectionHtml;

export type BioType = {
  header: HeaderProps;
  footer: FooterProps;
  sections: Section[];
};

export const bio: BioType = {
  header: {
    title: "redshoga's portfolio",
    imageUrl: ImageIcon,
    links: [
      { title: "Accounts", url: "#accounts" },
      { title: "GitHub", url: "https://github.com/redshoga" },
      { title: "Qiita", url: "https://qiita.com/redshoga" },
      { title: "Twitter", url: "https://twitter.com/redshoga" },
      { title: "Contact", url: "#contact" }
    ]
  },
  footer: {
    imageUrl: ImageIcon
  },
  sections: [
    {
      id: "services",
      type: "images",
      title: "Services",
      description: "いままで作ってきたサービス等の紹介",
      images: [
        {
          title: "nomosaic",
          description:
            "機械学習を用いた画像からモザイクを除去するサービス.(Netlify,Lambda,ECS,ECR,S3)",
          imageUrl: "images/nomosaic.png",
          url: "https://nomosaic.netlify.com/"
        },
        {
          title: "awesome-min-editor-fire",
          description: "オンライン同期メモ.(JS,Firebase)",
          imageUrl: "images/awesome-min-editor-fire.png",
          url: "https://github.com/redshoga/awesome-min-editor-fire"
        },
        {
          title: "2x Speed",
          description: "開いてるタブの動画を倍速にするChrome拡張機能.(JS)",
          imageUrl: "images/2x-video-extension.png",
          url:
            "https://chrome.google.com/webstore/detail/2x-speed/olomblpgcmhcgpijaioadbecpidmmdmb"
        },
        {
          title: "Random Qiita",
          description:
            "最近の10000件のQiita投稿からランダムに1つ取得し表示するChrome拡張機能.(JS,Firebase)",
          imageUrl: "images/random-qiita-extension.png",
          url:
            "https://chrome.google.com/webstore/detail/random-qiita/boompcfpganckjaomimmlppibifhbcji"
        },
        {
          title: "ポートフォリオ",
          description: "このサイト.(JS,Vue,Nuxt)",
          imageUrl: "images/portfolio.png",
          url: "https://github.com/redshoga/portfolio"
        },
        {
          title: "サブマネ",
          description: "サブスクリプションサービス管理サービス",
          imageUrl: "./images/monesub.png",
          url: "https://subsmgr.netlify.com"
        },
        {
          title: "coin-price-alert-tweet-bot",
          description:
            "仮想通貨の急変動をつぶやくTwitter BOT(休止中).(Python,Twitter API)",
          imageUrl: "images/coin-price-alert-tweet-bot.jpg",
          url: "https://github.com/redshoga/coin-price-alert-tweet-bot"
        },
        {
          title: "npx redshoga",
          description:
            "コマンド実行(npx redshoga)で表示される自己紹介カード.(JS,npm)",
          imageUrl: "images/npx redshoga.png",
          url: "https://qiita.com/redshoga/items/f1b5b003650172c54044"
        },
        {
          title: "Mouse Cursor Jamming",
          description:
            "マウスカーソルを操る(ように見せる)CSS,JSの手法の提案.(CSS,JS)",
          imageUrl: "images/Mouse Cursor Jamming.png",
          url: "https://qiita.com/redshoga/items/8f8579a60a8e5ed49d6d"
        },
        {
          title: "SymmetryFace",
          description:
            "顔認証を行い左右対称にして返すだけのTwitterボット(休止中).(Python,Twitter API)",
          imageUrl: "images/SymmetryFace.jpeg",
          url: "https://qiita.com/redshoga/items/964dd70caa966c03f879"
        },
        {
          title: "ZIP⇔画像変換器",
          description:
            "ZIPファイルとPNG画像を相互変換することができるウェブサービス.(JS,Canvas)",
          imageUrl: "images/zipimage.png",
          url: "https://redshoga.github.io/zipimage/"
        },
        {
          title: "削除したツイートだけ取ってくるシステム.(Python,Twitter API)",
          description: "タイトル通り.",
          imageUrl: "images/deleted tweets getter.png",
          url: "https://qiita.com/redshoga/items/220f11fbe7bd4f8c61f1"
        },
        {
          title: "RandomImageViewer",
          description: "Imgurからランダムに画像を表示するウェブサービス.(JS)",
          imageUrl: "images/RandomImageViewer.png",
          url: "https://redshoga.github.io/RandomImageViewer/"
        },
        {
          title: "白っぽい文字で動作するプログラミング言語",
          description:
            "白っぽい文字で動作するプログラミング言語を実行できるウェブサービス,(Brainf*ck,JS)",
          imageUrl: "images/shiroppoi.png",
          url: "https://redshoga.github.io/shiroppoi/"
        }
      ]
    },

    {
      id: "qiita",
      type: "links",
      title: "Qiita: Tech Blog",
      description:
        "技術ブログ. 以下は記事の一部. 計53記事, 計18万PV↑, 2000↑Contribution (2019年7月現在)",
      links: [
        {
          title:
            "Qiitaの記事をランダムに読める API / サービス を4時間ぐらいで作った (Firebase/AWS/Docker)",
          url: "https://qiita.com/redshoga/items/b550cdce94d7b74287d5"
        },
        {
          title:
            "あなたの会社ヤバすぎ❓ 一瞬でSlackで全社員のメールアドレス漏洩チェック☝🏻",
          url: "https://qiita.com/redshoga/items/0b2bba592882beacba6b"
        },
        {
          title:
            "マウスカーソルを操ってめちゃくちゃイライラさせるUXを作ってみた",
          url: "https://qiita.com/redshoga/items/8f8579a60a8e5ed49d6d"
        },
        {
          title:
            "FirebaseとNuxt.jsを使ってユーザ認証関係を簡単に作ってみる+1ヶ月前の自分に教えたいリンク集",
          url: "https://qiita.com/redshoga/items/da5c0e247e0df314a257"
        },
        {
          title:
            "🔰Python少し知ってればつくれる! PythonとAWS Lambdaを使ったAlexaスキル開発チュートリアル",
          url: "https://qiita.com/redshoga/items/dcd04d381122a158f312"
        },
        {
          title: "AIに眼を書かせてみた👀 (無料でGPUを使ってpix2pixを試す)",
          url: "https://qiita.com/redshoga/items/24cf9ea122bfcb61d2f4"
        },
        {
          title:
            "サルでもわかるEthereum,DAppsの使い方,作り方 その2 ～簡単なスマートコントラクトの実行編～",
          url: "https://qiita.com/redshoga/items/c20281e0d3b6eee7b115"
        }
      ],
      footerLink: {
        content: "Qiita記事一覧はこちら",
        url: "https://qiita.com/redshoga"
      }
    },
    {
      id: "github",
      type: "links",
      title: "GitHub",
      description:
        "作成したGitHubのリポジトリの一部の紹介. 計53Repositories (2019年7月現在)",
      links: [
        {
          title: "Nuxt-Passport-Sequelize-on-Express",
          subTitle: "Nuxtと認証ライブラリとORMの統合テンプレート",
          url: "https://github.com/redshoga/Nuxt-Passport-Sequelize-on-Express"
        },
        {
          title: "nuxt-gottani-template",
          subTitle: "Nuxtのフロントエンドのごった煮テンプレート",
          url: "https://github.com/redshoga/nuxt-gottani-template"
        },
        {
          title: "awesome-min-editor-fire",
          subTitle: "Firebaseを用いたクラウドメモサービス",
          url: "https://github.com/redshoga/awesome-min-editor-fire"
        },
        {
          title: "portfolio",
          subTitle: "Netlifyを用いたこのポートフォリオ",
          url: "https://github.com/redshoga/portfolio"
        },
        {
          title: "random-qiita-api",
          subTitle: "Firebase Functionsで動作するランダム記事取得API",
          url: "https://github.com/redshoga/random-qiita-api"
        },
        {
          title: "redshoga",
          subTitle: "npxで実行させる自己紹介カード",
          url: "https://github.com/redshoga/redshoga"
        },
        {
          title: "tensorflow-keras-denoising-autoencoder",
          subTitle: "KerasによるDenoising Autoencoderの実装",
          url:
            "https://github.com/redshoga/tensorflow-keras-denoising-autoencoder"
        },
        {
          title: "simple-collaborative-filtering",
          subTitle: "簡単な協調性フィルタリングの実装",
          url: "https://github.com/redshoga/simple-collaborative-filtering"
        },
        {
          title: "simple-image-classier",
          subTitle: "Kerasで実装したCNNを用いた画像分類器",
          url: "https://github.com/redshoga/simple-image-classier"
        },
        {
          title: "coin-price-alert-tweet-bot",
          subTitle: "仮想通貨の急上昇急降下を通知するTwitter bot",
          url: "https://github.com/redshoga/coin-price-alert-tweet-bot"
        }
      ],
      footerLink: {
        content: "GitHubリポジトリ一覧はこちら",
        url: "https://github.com/redshoga"
      }
    },
    {
      id: "activities",
      type: "links",
      title: "Activities",
      description: "登壇など",
      links: [
        {
          title:
            "1時間でまるわかり！決済Webアプリ開発徹底解説！【Vue.js+Nuxt.js+Firebase】",
          subTitle: "#dev_neko",
          url: "https://dev-neko.connpass.com/event/135052/"
        },
        {
          title:
            "Vue.js と Firebase, AKS でのクラウドネイティブなスマホアプリの作り方 ＋ ML Ops による AI モデルの作り方",
          subTitle: "Microsoft de:code 2019",
          url:
            "https://www.microsoft.com/ja-jp/events/decode/2019session/detail.aspx?sid=CD42"
        },
        {
          title:
            "Azure Cognitive Services と Box Platform を活用した、次世代コンテンツ マネジメント システム開発",
          subTitle: "Microsoft Tech Summit 2018",
          url:
            "https://www.microsoft.com/ja-jp/events/techsummit/2018/session.aspx"
        },
        {
          title: "Azureでキャリアを拓く ～クラウドに出会った4人の物語～",
          subTitle: "ASCII.jp",
          url: "https://ascii.jp/elem/000/001/838/1838466/"
        },
        {
          title: "NuxtのプロジェクトにLogRocketを追加してすぐに幸せになる方法",
          subTitle: "Yumemi.vue #3",
          url: "https://qiita.com/redshoga/items/09eced11017ff6c08c7b"
        }
      ]
    },
    {
      id: "design",
      type: "images",
      title: "Design",
      description: "いままでデザインしてきたサービス等の紹介",
      images: [
        {
          title: "nomosaic",
          description: "モザイク削除サービス",
          url: "https://www.figma.com/file/HPWnXhGOECMEcbtvNPytsxIo/nomosaic",
          imageUrl: "./images/nomosaic.png"
        },
        {
          title: "ポートフォリオ",
          description: "現在表示中のポートフォリオ",
          url: "https://www.figma.com/file/SC3r9fvq9iSNltWn7J8xJDC1/portfolio",
          imageUrl: "./images/portfolio.png"
        },
        {
          title: "monesub",
          description: "サブスクリプションサービス管理サービス",
          url:
            "https://www.figma.com/file/esosmF7RkEuu9vXC0cuypxMg/%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF-%E4%BB%AE%E5%90%8D",
          imageUrl: "./images/monesub.png"
        },
        {
          title: "カフェアプリ",
          description: "電子決済カフェ注文アプリ",
          url:
            "https://www.figma.com/proto/GnlNVL8X4Ak5vgzFBJTXQKk1/Payment-Service?scaling=scale-down&node-id=4%3A281",
          imageUrl: "./images/cafe.png"
        }
      ]
    },
    {
      id: "accounts",
      type: "links",
      title: "Accounts",
      description: "SNS等のアカウント情報",
      links: [
        {
          title: "Twitter",
          subTitle: "一番使ってる",
          url: "https://twitter.com/redshoga"
        },
        {
          title: "Qiita",
          subTitle: "技術ブログ",
          url: "https://qiita.com/redshoga"
        },
        {
          title: "Facebook",
          subTitle: "顔の本",
          url: "https://www.facebook.com/profile.php?id=100017481132130"
        },
        {
          title: "teratail",
          subTitle: "技術系質問回答サービス",
          url: "https://teratail.com/users/redshoga"
        },
        {
          title: "npm",
          subTitle: "Node Package Manager",
          url: "https://npmjs.com/~redshoga"
        },
        {
          title: "Speaker Deck",
          subTitle: "過去の登壇資料",
          url: "https://speakerdeck.com/redshoga"
        },
        {
          title: "Blog",
          subTitle: "雑記",
          url: "https://benishoga.hatenablog.com/"
        },
        {
          title: "LAPRAS",
          subTitle: "勝手に得点化してくるやつ",
          url: "https://lapras.com/public/LITSWPL"
        }
      ]
    },
    {
      id: "skills",
      type: "list",
      title: "Skills",
      description: "使ってきた技術(サービス, ツール, 言語)の一覧",
      list: [
        {
          title: "言語: JavaScript/Python/TypeScript/Ruby/C#/Solidity/Brainf*ck"
        },
        {
          title: "フロントエンド: Vue/Nuxt/React/HTML5/CSS3/jQuery"
        },
        {
          title: "バックエンド: Express/Nest.js/Rails/Django/Flask/Sinatra"
        },
        {
          title: "クラウド: AWS(ECR,ECS,S3,Lambda)/GCP(Firebase)/Azure(ACR,AKS)"
        },
        {
          title: "画像処理,機械学習: NumPy/SciPy/OpenCV/TensorFlow/Keras/ImageJ"
        },
        {
          title: "その他: Docker/K8s/Vagrant/Unity"
        }
      ]
    },
    {
      id: "oss-contribution",
      type: "links",
      title: "OSS Contribution",
      description: "貢献リポジトリ一覧",
      links: [
        {
          title: "nestjs/nest",
          subTitle: "TS, JSのためのExpressの次に有名なウェブフレームワーク",
          url: "https://github.com/nestjs/nest"
        },
        {
          title: "Redocly/create-react-app-redoc",
          subTitle: "Swaggerの閲覧サービス",
          url: "https://github.com/Redocly/create-react-app-redoc"
        },
        {
          title: "subroh0508/otonashi",
          subTitle: "Kotlin用SPARQLクライアント",
          url: "https://github.com/subroh0508/otonashi"
        }
      ]
    },
    {
      id: "contact",
      type: "html",
      title: "Contact",
      description: "お問い合わせに関して",
      html: `TwitterのDMまたはFacebook Messengerが一番反応が早いです.<br>以下のGoogleフォームからもお問い合わせいただけます.<br><a class="color-link" href="https://docs.google.com/forms/d/e/1FAIpQLSck2TcJoZDblEB1Yz16zykekSByFNx9vr979Q8IKcfv5-KCNA/viewform">お問い合わせフォーム</a>`
    },
    {
      id: "cg",
      type: "html",
      title: "CG作品",
      description: "作品集",
      html: "準備中"
    }
  ]
};
