// CalculatorPage.tsx
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { ProductRow, ProductRowsHeader, IconButton, PageHeader } from "../../../components";
import { IconAdd, IconRestart } from "../../../styles";
import { ButtonsLineContainer } from "./calculatorPage.wrappers";
import { useProductHandlers } from "../../../hooks";

const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);
    const generateId = () => Date.now() + Math.random();

    const initialProductsList = Array.from({ length: initialRows }, () => ({ id: generateId() }));

    const {
        productsList,
        setProductsList,
        handleUpdateCurrency,
        handleProductUpdate
    } = useProductHandlers(initialProductsList);

    const handleAddProduct = () => {
        if (productsList.length < maxRows) {
            setProductsList([...productsList, { id: generateId() }]);
        }
    };

    const handleResetPage = () => {
        setProductsList(initialProductsList);
    };
    const productsToAddLeft: number = (maxRows - productsList.length);

    return (
        <>
            <PageHeader title={translate("common:pages.calculator.title")}
                        subTitle={translate("common:pages.calculator.subTitle")} />

            <div style={{ display: "grid", width: "100%" }}>
                <ProductRowsHeader productCount={productsList.length} updateCurrency={handleUpdateCurrency} />
                <AnimatePresence>
                    {productsList.map((product, index) => (
                        <ProductRow key={product.id} listOrder={index} {...product}
                                    deleteFunction={(rowId) => handleProductUpdate({
                                        id: rowId,
                                        keyToUpdate: "price",
                                        updatedValue: 0
                                    })}
                                    returnFunction={handleProductUpdate}
                                    productCount={productsList.length} />
                    ))}
                </AnimatePresence>
            </div>

            <ButtonsLineContainer>
                <IconButton label={translate("common:pages.calculator.button.addProduct", { left: productsToAddLeft })}
                            returnFunction={handleAddProduct} icon={<IconAdd size={30} color={"white"} />}
                            disabled={productsToAddLeft === 0} />
                <IconButton label={translate("common:pages.calculator.button.reset")} returnFunction={handleResetPage}
                            icon={<IconRestart size={30} color={"white"} />} disabled={false} />
            </ButtonsLineContainer>
        </>
    );
};

export default CalculatorPage;
