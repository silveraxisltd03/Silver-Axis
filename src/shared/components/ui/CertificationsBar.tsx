import { CERTS } from '@/shared/constants/certifications';
import { css } from '@/shared/lib/css';

export function CertificationsBar() {
  return (
    <div className="cert-bar">
      <p className="cert-bar__label">Certified where it matters</p>
      <div className="cert-bar__items">
        {CERTS.map((c) => (
          <div key={c} className="cert-bar__item">
            <span style={css('width:30px;height:30px;border-radius:7px;border:1px solid rgba(42,107,255,.3);background:#eaf0ff;')} aria-hidden="true" />
            <span style={css('font-size:14px;font-weight:500;color:#2b3346;')}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
