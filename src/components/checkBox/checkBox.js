import React, { useEffect, useState } from 'react';
import * as styles from './checkBox.module.css';

const CheckBox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(props.isChecked);
    }, [props.isChecked]);

    const handleChecked = (e) => {
        if (e.disabled) return;
        setIsChecked(!isChecked);
    };

    return (
        <>
            <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className={styles.checkBox}
                disabled={props.disabledCheckBox}
                checked={isChecked}
                onChange={handleChecked}
            />
            <label htmlFor="checkbox"></label>
        </>
    );
};

export default CheckBox;
