'use client';
import Ract, { useState } from 'react';
import Button from '@/app/components/button';
import CompanyFormModal from '@/app/components/company-form-modal';

export default function AddCompanyButton({ ...rest }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={() => console.log('Form modal')}
        show={show}
        onClose={() => setShow(false)}
      ></CompanyFormModal>
    </>
  );
}
