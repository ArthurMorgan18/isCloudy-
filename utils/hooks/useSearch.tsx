import { useState } from 'react';
import {InputSearchEvent} from "../../common/types";

const useSearch = () => {
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const onSearchBlurEvent = (event: InputSearchEvent) => setSearchValue(event.nativeEvent.text);

    //TODO: create a app store and dispatch search value to it

    return {
        searchValue,
        setSearchValue,
        onSearchBlurEvent
    }
};

export default useSearch;
