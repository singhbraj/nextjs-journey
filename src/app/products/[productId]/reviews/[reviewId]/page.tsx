export default async function ProductReviw({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  console.log(await params);
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
