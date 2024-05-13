import { Dataset } from './upload-file.component';

export const datasetList: Dataset[] = [
   {
      id: 1,
      name: 'Name dataset 1',
      fields: ['LAT', 'CELL', 'MSIC'],
      isRangeInput: false,
      listDatasetValue: [
         {
            value: '2142332_31244343_2432545',
         },
         {
            value: '2423545_4576767_446565',
         },
         {
            value: '1111',
         },
      ],
   },
   {
      id: 2,
      name: 'Name dataset 2',
      fields: ['CELL'],
      isRangeInput: false,
      listDatasetValue: [
         {
            value: '2142332_31244343_2432545',
         },
         {
            value: '2423545_4576767_446565',
         },
         {
            value: '456546_2536546_3425436',
         },
         {
            value: '456546_2536546_3425436',
         },
      ],
   },
   {
      id: 3,
      name: 'Name dataset 3',
      fields: ['MSI'],
      isRangeInput: true,
      listDatasetValue: [
         {
            value: { from: 'ưeqr423543', to: '432546546' },
         },
         {
            value: {
               from: '11111111',
               to: '343222222',
            },
         },
         {
            value: { from: '33333333', to: '3253545454' },
         },
      ],
   },
];
