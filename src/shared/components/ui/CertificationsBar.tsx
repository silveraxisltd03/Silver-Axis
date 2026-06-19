import { CERTS } from '@/shared/constants/certifications';
import { css } from '@/shared/lib/css';

export function CertificationsBar() {
  return (
    <div style={css('display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:30px;')}>
      <p style={css('font-size:14px;color:#9aa3b8;margin:0;max-width:220px;')}>Certified where it matters</p>
      <div style={css('display:flex;gap:18px;flex-wrap:wrap;')}>
        {CERTS.map((c) => (
          <div key={c} style={css('display:flex;align-items:center;gap:11px;padding:13px 20px;border:1px solid rgba(20,40,90,.1);border-radius:12px;background:#fff;box-shadow:0 4px 14px rgba(28,50,110,.05);')}>
            <span style={css('width:30px;height:30px;border-radius:7px;border:1px solid rgba(42,107,255,.3);background:#eaf0ff;')} aria-hidden="true"></span>
            <span style={css('font-size:14px;font-weight:500;color:#2b3346;')}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
