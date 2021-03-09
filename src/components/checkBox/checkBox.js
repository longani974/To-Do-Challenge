import React from 'react';
import * as styles from './checkBox.module.css';

const CheckBox = (props) => {
    // const [isChecked, setIsChecked] = useState(false);

    // useEffect(() => {
    //     setIsChecked(props.isChecked);
    // }, [props.isChecked]);

    const handleChecked = (e) => {
        e.target.checked = props.isChecked;
        // if (e.disabled) return;
        // setIsChecked(props.isChecked);
    };

    return (
        <>
            <input
                type="checkbox"
                name={props.id}
                id={props.id}
                className={styles.checkBox}
                checked={props.isChecked}
                onChange={handleChecked}
            />
            <label htmlFor={props.id}></label>
        </>
    );
};

export default CheckBox;
