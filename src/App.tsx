import { useState } from 'react';
import { ButtonCenter } from './components/atoms/StyledComponents/ButtonCenter';
import { ButtonOutside } from './components/atoms/StyledComponents/ButtonOutside';
import { ButtonCenter as ButtonCenterUS } from './components/atoms/MaterialStyles/ButtonCenter';
import { ButtonOutside as ButtonOutsideUS } from './components/atoms/MaterialStyles/ButtonOutside';
import { HeaderSC } from './components/organisms/Header/HeaderSC';
import { HeaderUS } from './components/organisms/Header/HeaderUS';
import { MainTemplate } from './components/templates/MainTemplate';
import { SectionTemplate } from './components/templates/SectionTemplate';

function App() {
  const [isMutated, setIsMutated] = useState(false)
  return (
    <MainTemplate>
        <SectionTemplate 
          Header={
            <HeaderSC 
              isMutated={isMutated} 
              setIsMutated={setIsMutated} 
            />
          }
          ButtonOne={<ButtonOutside position={0} activeElement={0} setActiveElement={()=>console.log("")} />}
          ButtonTwo={<ButtonCenter />}
        />
        <SectionTemplate 
          Header={
            <HeaderUS
              isMutated={isMutated} 
              setIsMutated={setIsMutated} 
            />
          }
          ButtonOne={<ButtonOutsideUS position={0} activeElement={0} setActiveElement={()=>console.log("")} />}
          ButtonTwo={<ButtonCenterUS />}
        />
    </MainTemplate>
  );
}

export default App;
