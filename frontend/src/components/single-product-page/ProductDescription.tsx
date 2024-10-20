interface ProductDescriptionInterface {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionInterface> = ({
  description,
}) => {
  return (
    <div className="detailsContent">
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
