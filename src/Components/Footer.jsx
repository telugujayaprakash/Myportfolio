import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Jayaprakash</h2>
            <div className='flex justify-center gap-5 text-3xl mt-5'>
              <h2><a href="https://github.com/telugujayaprakash" target="_blank" rel="noopener noreferrer" title="Github"><ion-icon name="logo-github">j</ion-icon></a></h2>
              <h2><a href="https://github.com/telugujayaprakash" target="_blank" rel="noopener noreferrer" title="Github"><ion-icon name="logo-linkedin">j</ion-icon></a></h2>
              <h2><a href="https://github.com/telugujayaprakash" target="_blank" rel="noopener noreferrer" title="Github"><ion-icon name="logo-github">j</ion-icon></a></h2>
              <h2><a href="https://www.instagram.com/jayaprakash_317/" target="_blank" rel="noopener noreferrer" title="Instagram"><ion-icon name="logo-instagram" /></a></h2>
              <h2><a href="mailto:jayaprakash96030@gmail.com" target="_blank" rel="noopener noreferrer" title="Mail"><ion-icon name="mail-unread-outline" /></a></h2>
            </div>
            <p className="mt-5">Crafting web experiences with creativity and passion.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className=" text-sm">&copy; 2024</p>
          <p className=" text-sm">Designed & Developed by Jayaprakash.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;