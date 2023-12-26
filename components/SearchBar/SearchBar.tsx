import {TextInput, StyleSheet} from "react-native";
import {theme} from "../../utils";
import useSearch from "../../utils/hooks/useSearch";

const SearchBar = () => {
    const { onSearchBlurEvent } = useSearch();
    return <TextInput
        maxLength={10}
        clearTextOnFocus
        placeholder="Search"
        placeholderTextColor={theme.input.placeholderColor}
        style={styles.searchInput}
        onBlur={onSearchBlurEvent}
    />
};

const styles = StyleSheet.create({
    searchInput: {
        width: '70%',
        height: 50,
        borderBottomColor: theme.input.textColor,
        borderBottomWidth: 1,
        color: theme.input.textColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SearchBar;
