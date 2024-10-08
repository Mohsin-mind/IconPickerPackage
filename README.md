# Usage Example.

Note: This IconPicker uses Font Awesome 6.6.0.

Install `IconPicker` package

```bash
npm i @mohsin-mi/iconpicker
```

Import `IconPicker` and `IconPicker.css`

```bash
import IconPicker from "@mohsin-mi/iconpicker";
import '@mohsin-mi/iconpicker/lib/iconpicker.css';
```

Use the `IconPicker` component, and pass fontawesome `icons` as an object with whatever the category names you want.

```jsx
    const icons = {
        Brands: [
            'fa-brands fa-500px',
            'fa-brands fa-amazon',
        ],
        Currency: [
        'fa-cny',
        'fa-dollar-sign',
        ],
    };
```    
Alternatively, you can import some pre-defined Icons from the package. 

```jsx
    
    import icons from '@mohsin-mi/iconpicker/lib/icons.js';

    <IconPicker
    icons={icons}
    value={`fa-brands fa-amazon`}
    onChange={(e) => onChange(e, "icon")}
    closeOnSelect={true}
    showCategory={true}
    showSearch={true}
    isMulti={false}
    adjustPosition={{ top: 10, left: 0 }}
    buttonStyle={`flex items-center justify-center min-h-[35px] min-w-[35px] rounded-l-[8px] border border-none`}
    noSelectedPlaceholder={'arrow-up-from-bracket'}
    zIndexPopup={9999}
    popupStyle='bg-white border border-gray-300 shadow-lg rounded popup-container min-w-[280px]'
    gridColumns = {5}
    gridRows = {4}
    iconBgColor = {`bg-gray-200`}
    iconSelectedBgColor = {`bg-blue-200`}
    iconHeight = {65}
    iconWidth = {65}
    />
```          

