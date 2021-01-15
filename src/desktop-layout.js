import React from 'react';

// CSS styling (applicable on component level).
import css from './desktop-layout.module.css';

const DesktopLayoutComponent = () => {
  return (
    <React.Fragment>
    { /* Entire wrapper, makes up the HOME page */}
    <div className={css.desktop_grid_wrapper}>

      { /* Navigation or menu section */}
      <div className={css.desktop_nav}>
        <ul className={css.desktop_menu}>
          <li>h</li>
          <li>b</li>
          <li>c</li>
          <li>a</li>
        </ul>
      </div>

      { /* Internal wrapper, bordered section */}
      <div className={css.desktop_frame}>
        <div className={css.desktop_site_intro_text}>
          <h1 className={css.site_name}>Off-Beat Insights</h1>
          <h4 className={css.site_tag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default DesktopLayoutComponent;
