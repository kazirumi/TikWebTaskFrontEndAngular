export class Product {
    productName: string;
    price: number;
    stock: number;
    status: string;
    imagePath: [{ path: string }];

    category: {
        id: string,
        categoryName: string
    };
    varient: {
        id: string,
        varientName: string,
        varientSubName: [
            {
                Name: string,
            },

        ]
    };

    collectionName: string;

    description: string;
    videoURL: string;

}
