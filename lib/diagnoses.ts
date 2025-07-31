import { Diagnosis } from './types'

export const diagnoses: Diagnosis[] = [
  {
    id: 'study-method',
    title: 'あなたにぴったりの勉強法診断',
    description: '自分に合った「勉強のやり方（方法・スタイル）」を知る',
    questions: [
      {
        id: 'q1',
        text: '一人で黙々とやるのが得意？',
        options: [
          { id: 'a', text: 'そう！💫', value: 'introvert' },
          { id: 'b', text: 'ちがうよ〜🌸', value: 'extrovert' }
        ]
      },
      {
        id: 'q2',
        text: '音楽を聞きながらの勉強は集中できる？',
        options: [
          { id: 'a', text: 'できる！🎵', value: 'multitask' },
          { id: 'b', text: 'むり〜😅', value: 'focused' }
        ]
      },
      {
        id: 'q3',
        text: 'わからないところはすぐに人に聞く？',
        options: [
          { id: 'a', text: 'すぐ聞く！💬', value: 'collaborative' },
          { id: 'b', text: 'まず自分で🤔', value: 'independent' }
        ]
      },
      {
        id: 'q4',
        text: '夜型？朝型？',
        options: [
          { id: 'a', text: '朝派！☀️', value: 'morning' },
          { id: 'b', text: '夜派！🌙', value: 'night' }
        ]
      }
    ],
    results: [
      {
        type: 'planning',
        title: 'コツコツ計画型',
        description: '計画的に着実に進めるタイプ',
        advice: [
          '時間割やToDoリストを使って進めると◎',
          '毎日少しずつ進めることが大切',
          '達成感を味わいながら継続しよう'
        ],
        color: 'bg-pastel-blue'
      },
      {
        type: 'intuitive',
        title: '直感ひらめき型',
        description: '短時間で集中して効率的に学ぶタイプ',
        advice: [
          '短時間集中・図や動画で理解すると効率UP',
          'ポモドーロテクニックがおすすめ',
          'ビジュアル教材を活用しよう'
        ],
        color: 'bg-pastel-yellow'
      },
      {
        type: 'communication',
        title: 'コミュニケーション型',
        description: '人と協力しながら学ぶタイプ',
        advice: [
          '友達と教え合いながらが合ってる',
          'スタディグループを作ろう',
          'ディスカッションで理解を深めよう'
        ],
        color: 'bg-pastel-pink'
      }
    ]
  },
  {
    id: 'environment',
    title: '集中できる環境診断',
    description: '自分が最も集中できる「場所・時間・環境」を知る',
    questions: [
      {
        id: 'q1',
        text: '勉強中に静かすぎると逆に集中できない？',
        options: [
          { id: 'a', text: 'そうかも🎶', value: 'ambient' },
          { id: 'b', text: '静かがいい🤫', value: 'silent' }
        ]
      },
      {
        id: 'q2',
        text: '朝と夜どちらが調子いい？',
        options: [
          { id: 'a', text: 'おはよ〜🌅', value: 'morning' },
          { id: 'b', text: 'よる〜🌃', value: 'night' }
        ]
      },
      {
        id: 'q3',
        text: '勉強のおともにおやつが必要？',
        options: [
          { id: 'a', text: '必須！🍪', value: 'reward' },
          { id: 'b', text: 'いらないかな💪', value: 'focus' }
        ]
      },
      {
        id: 'q4',
        text: '勉強机は整理されてる方がいい？',
        options: [
          { id: 'a', text: 'きっちり派✨', value: 'organized' },
          { id: 'b', text: 'ゆるふわ派🌼', value: 'flexible' }
        ]
      }
    ],
    results: [
      {
        type: 'cafe',
        title: 'カフェ気分タイプ',
        description: '適度な環境音で集中力アップ',
        advice: [
          'ちょっと音がある方が集中できる',
          'カフェやBGMのある場所がおすすめ',
          '環境音アプリを活用しよう'
        ],
        color: 'bg-pastel-green'
      },
      {
        type: 'focused',
        title: '集中モードONタイプ',
        description: '静かな環境で最高のパフォーマンス',
        advice: [
          '静かな部屋＋タイマーで集中力MAX',
          '図書館や自習室がおすすめ',
          'ノイズキャンセリングヘッドホンも◎'
        ],
        color: 'bg-pastel-purple'
      },
      {
        type: 'reward',
        title: 'ごほうび大事タイプ',
        description: '楽しみながら勉強するタイプ',
        advice: [
          '小休憩やおやつがやる気のカギ',
          '達成ごとに小さなご褒美を設定',
          'メリハリをつけて勉強しよう'
        ],
        color: 'bg-pastel-yellow'
      }
    ]
  },
  {
    id: 'learning-type',
    title: '勉強タイプ診断',
    description: '自分の「学び方・考え方のクセ」を知る',
    questions: [
      {
        id: 'q1',
        text: 'わからないことはとことん調べる？',
        options: [
          { id: 'a', text: 'とことん！🔍', value: 'research' },
          { id: 'b', text: 'ほどほどに😌', value: 'practical' }
        ]
      },
      {
        id: 'q2',
        text: 'テスト前に一夜漬けしたことがある？',
        options: [
          { id: 'a', text: 'あるある😅', value: 'cramming' },
          { id: 'b', text: 'ないよ〜😇', value: 'steady' }
        ]
      },
      {
        id: 'q3',
        text: '好きな教科はとことん追求したい？',
        options: [
          { id: 'a', text: 'もちろん！🤩', value: 'deep' },
          { id: 'b', text: 'そうでもない😊', value: 'balanced' }
        ]
      },
      {
        id: 'q4',
        text: '人に教えると覚えやすい？',
        options: [
          { id: 'a', text: 'それそれ！👩‍🏫', value: 'teaching' },
          { id: 'b', text: 'ちがうかな🤷', value: 'absorbing' }
        ]
      }
    ],
    results: [
      {
        type: 'steady',
        title: 'コツコツ継続型',
        description: '毎日の積み重ねが得意なタイプ',
        advice: [
          '毎日ちょっとずつ積み上げるのが得意',
          '習慣化アプリを使うと効果的',
          '長期的な目標を立てよう'
        ],
        color: 'bg-pastel-blue'
      },
      {
        type: 'flash',
        title: 'ひらめき重視型',
        description: '直感と理解力で学ぶタイプ',
        advice: [
          '短時間集中・アウトプットで理解が深まる',
          'マインドマップを活用しよう',
          '実践的な問題に取り組もう'
        ],
        color: 'bg-pastel-pink'
      },
      {
        type: 'analytical',
        title: '分析研究型',
        description: '論理的に深く理解するタイプ',
        advice: [
          'データ・因果関係が好き、理科や社会が得意',
          '参考書を複数使って深掘りしよう',
          '実験や検証を通じて学ぼう'
        ],
        color: 'bg-pastel-green'
      },
      {
        type: 'sensory',
        title: '感覚派直感型',
        description: '体験を通じて学ぶタイプ',
        advice: [
          'ビジュアル・体験で覚える派（図や動画◎）',
          'イラストや図表を自作しよう',
          '実物や模型を使った学習が効果的'
        ],
        color: 'bg-pastel-purple'
      }
    ]
  }
]