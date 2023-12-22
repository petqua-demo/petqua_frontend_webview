import { useState } from 'react';
import * as s from '../styles/pageTabStyle';

const PageTab = ({ pageTabList }: any) => {
  const [selectedTab, setSelectedTab] = useState(pageTabList[0].value);
  return (
    <s.CategoryCartListContainer>
      <s.CategoryCartListUl>
        {pageTabList.map((pageTab: any) => {
          return (
            <s.CategoryCartListLi
              className={selectedTab === pageTab.value ? 'selected' : ''}
              onClick={() => {
                setSelectedTab(pageTab.value);
              }}
              key={pageTab.value}
            >
              {pageTab.name}
            </s.CategoryCartListLi>
          );
        })}
      </s.CategoryCartListUl>
    </s.CategoryCartListContainer>
  );
};

export default PageTab;
