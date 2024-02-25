import styles from './OptionEntry.module.css';

interface OptionEntryProps {
  dataCyOptionSelector: string;
  entryText: string;
  onEntrySelect: (newValue: string) => void;
}

const OptionEntry: React.FC<OptionEntryProps> = (props) => {
  const { entryText } = props;

  return (
    <div
      data-cy={props.dataCyOptionSelector}
      onClick={() => props.onEntrySelect(props.entryText)}
      className={styles.optionEntryContainer}
    >
      <span
        style={{
          marginLeft: '1rem',
        }}
      >
        {entryText}
      </span>
    </div>
  );
};

export default OptionEntry;
