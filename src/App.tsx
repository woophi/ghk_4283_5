import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import first from './assets/first.png';
import hb from './assets/hb.jpg';
import second from './assets/second.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag('event', 'connect_click', {
      variant_name: 'ghk_4283_3',
    });
    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <img src={hb} width="100%" height={280} style={{ objectFit: 'cover' }} />
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="medium">
          Подключите к банку учётную запись Госуслуг
        </Typography.TitleResponsive>

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Подключите Госуслуги к банку, и сможем продолжить оформление кредитного продукта
        </Typography.Text>

        <div className={appSt.row}>
          <div className={appSt.iconBox}>
            <img src={first} width={24} height={24} />
          </div>

          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Необходимо для актуализации данных
          </Typography.Text>
        </div>

        <div className={appSt.row}>
          <div className={appSt.iconBox}>
            <img src={second} width={24} height={24} />
          </div>

          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Проверим наличие самозапрета на выдачу кредитов
          </Typography.Text>
        </div>

        <Typography.Text view="primary-small" color="secondary">
          Нажимая «Подключить к банку», вы соглашаетесь на{' '}
          <a
            href="https://alfabank.st/site-upload/aa/d9/1677/Consent_3022025.pdf"
            style={{ color: '#2A77EF', textDecoration: 'none' }}
            target="_blank"
            onClick={() => {
              window.gtag('event', 'agreement_doc_click', {
                variant_name: 'ghk_4283_3',
              });
            }}
          >
            обработку персональных данных
          </a>
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить Госуслуги
        </ButtonMobile>
      </div>
    </>
  );
};
