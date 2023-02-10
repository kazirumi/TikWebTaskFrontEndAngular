export class Product {
    productName: string;
    price: number;
    stock: number;
    status: string;
    imagePath: [{ path: string, _id: string }];

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
    _id: string;

    collectionName: string;

    description: string;
    videoURL: string;

    __v: number;
}
