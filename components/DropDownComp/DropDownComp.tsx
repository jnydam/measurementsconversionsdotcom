import styles from './DropDownComp.module.css';
import { useState } from 'react';
import Image from 'next/image';
import chevronIcon from '../../public/app/chevronicon.svg';
import OptionEntry from './OptionEntry/OptionEntry';

interface DropDownCompProps {
  currentValue: string;
  dataCy: string;
  dataCyOptionSelector: string;
  onDropDownChange: (newValue: string) => void;
  availableValues: string[];
}

const DropDownComp: React.FC<DropDownCompProps> = (props) => {
  const { currentValue, availableValues } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelectionBoxClick = () => {
    setIsExpanded((state) => !state);
  };

  const handleOptionEntrySelect = (newStringVal: string) => {
    props.onDropDownChange(newStringVal);
    setIsExpanded(false);
  };

  return (
    <div data-cy={props.dataCy} className={styles.parentContainer}>
      {/* Needs to be a parent display comp
        Needs to be a dropdown comp which conditionally renders */}
      <div onClick={handleSelectionBoxClick} className={styles.selectionBox}>
        <span
          style={{
            marginLeft: '1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          {currentValue}
        </span>
        <Image
          alt='chevron icon'
          style={{
            marginRight: '1rem',
          }}
          src={chevronIcon}
          height={15}
          width={15}
        ></Image>
      </div>
      {isExpanded && (
        <div className={styles.optionsContainer}>
          {availableValues.sort().map((availableValue, index) => (
            <OptionEntry
              dataCyOptionSelector={props.dataCyOptionSelector}
              onEntrySelect={handleOptionEntrySelect}
              entryText={availableValue}
              key={index}
            ></OptionEntry>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownComp;
