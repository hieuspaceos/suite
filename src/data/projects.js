export const projects = [
  {
    id: 'pressrs',
    name: 'pressrs',
    icon: '/assets/pressrs.png',
    repo: 'https://github.com/hieuspaceos/pressrs',
    lang: 'Rust',
    tagline: {
      en: 'WordPress-parity CMS in one Rust binary — static output, wp-admin inside',
      vi: 'CMS tương thích WordPress trong một binary Rust — xuất static, admin y hệt wp-admin',
      ja: 'WordPress互換CMSを1つのRustバイナリで — 静的出力、wp-admin再現',
      ko: 'Rust 바이너리 하나의 WordPress 호환 CMS — 정적 출력, wp-admin 재현',
      zh: '单个 Rust 二进制的 WordPress 兼容 CMS — 静态输出，wp-admin 复刻',
    },
    desc: {
      en: 'Structural conversion: WP\'s request-time PHP render becomes publish-time static build. One binary + one .db file, imports WP dumps, serves cached HTML. MIT.',
      vi: 'Chuyển đổi cấu trúc: render PHP lúc request của WP trở thành build static lúc publish. Một binary + một file .db, import WP dump, phục vụ HTML đã cache. MIT.',
      ja: '構造的変換: WPのリクエスト時PHPレンダーを公開時静的ビルドに。バイナリ1つ+DB1つ、WPダンプをインポート。',
      ko: '구조적 변환: WP의 요청 시 PHP 렌더를 발행 시 정적 빌드로. 바이너리 하나 + .db 하나, WP 덤프 임포트.',
      zh: '结构化转换：将 WP 的请求时 PHP 渲染变为发布时静态构建。一个二进制 + 一个 .db，导入 WP 转储。',
    },
  },
];
