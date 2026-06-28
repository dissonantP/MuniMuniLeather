export default function CmsHome() {
  return (
    <main style={{ margin: '0 auto', maxWidth: 760, padding: '64px 24px' }}>
      <p style={{ color: '#70685f', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>
        Muni Muni Leather CMS
      </p>
      <h1 style={{ fontFamily: 'serif', fontSize: 48, lineHeight: 1, margin: '0 0 20px' }}>
        Content workspace
      </h1>
      <p style={{ color: '#514b44', fontSize: 18, lineHeight: 1.6 }}>
        This app is the future editable content backend. Use the Payload admin to manage pages,
        media, and product spotlights.
      </p>
      <a href="/admin" style={{ color: '#201b16', fontWeight: 700 }}>
        Open admin
      </a>
    </main>
  )
}
