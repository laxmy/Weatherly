
import React from 'react'
import PropTypes from 'prop-types';
import classes from './Searchbar.module.css';

const SearchBar = (props) => {
    return(
        <form onSubmit={props.onClickHandler}>
            <div className={classes.SearchBarWrapper}>
                <div className={classes.InputFieldWrapper}>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="city" 
                            value={props.value}
                            onChange={props.onChangeHandler}
                            style={(props.error) ? {'borderBottomColor': 'red'} : null}
                            required />
                        {props.error && <label className={classes.InputError}>Please enter valid city</label>}
                    </div>
                    <div className={classes.ButtonWrapper}>
                        <button
                        name="searchSubmit" 
                        type="submit" 
                        disabled={!props.submitEnabled}>Search</button>
                    </div>
            </div>
        </form>
    );
}

SearchBar.propTypes = {
    onClickHandler: PropTypes.func,
    onChangeHandler: PropTypes.func,
    submitEnabled: PropTypes.bool,
    error: PropTypes.bool,
}

export default SearchBar


