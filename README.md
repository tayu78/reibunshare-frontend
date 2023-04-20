# Reibun Share
<img width="1438" alt="reibunshare" src="https://user-images.githubusercontent.com/73221904/232927494-502dd231-d2e3-4568-81d3-3f62b2d9761c.png">

## What is this app ?
This is an app to share reibun(which means exmaple sentences in Japansese) for language learners so that they can understand how phrase is used in daily life.


## Why I create this app?
- I have studied English words for long time with vocabulary books but it is difficult to remember all of them since it's endless.

- The example sentences in those books have are sometimes useful, but we don't use them in daily conversation. Seeing example sentences from others colud help us to understand how to use phrases.

- Making own exmalple sentences is good way to memorize phrases

From above reason, I decided to create app which allows app user to
-  create own example
-  see example created by others


## Tech Stack
- Typescript
- React
- Redux
- Node.js
- MongoDB
- socket.io
- json web token

[this](https://github.com/tayu78/reibunshare-backend) is backend code's link!


## Preview
### card
card contains 
- phrase
- usage(reibun)
- meaning
- description
- tags

**card list**

we can see list of card other people created.  You can imagine like timelines of twitter.

<img width="700" alt="スクリーンショット 2023-04-20 11 45 54" src="https://user-images.githubusercontent.com/73221904/233459346-c5c88994-22fe-444f-b252-c977c7082d90.png">


**create card**

<img width="700" alt="スクリーンショット 2023-04-18 19 06 18" src="https://user-images.githubusercontent.com/73221904/232947886-e73968d5-5435-4868-8aec-defbff1f1469.png">


**comment**

<img width="700" alt="スクリーンショット 2023-04-18 18 47 26" src="https://user-images.githubusercontent.com/73221904/232947160-d8057d81-6c3d-400a-a455-892284647e3d.png">

**search**

<img width="700" alt="スクリーンショット 2023-04-18 19 03 40" src="https://user-images.githubusercontent.com/73221904/232947543-a8d55367-9bd9-4b4a-9b31-ec96868af92f.png">

### Book
User can create book to categorize card.

**book list in profile page**

<img width="700" alt="スクリーンショット 2023-04-18 18 48 20" src="https://user-images.githubusercontent.com/73221904/232947326-d7b9f32a-77f1-4a7d-b4e6-2b08383489f4.png">

**add to book**

<img width="700" alt="スクリーンショット 2023-04-18 18 48 04" src="https://user-images.githubusercontent.com/73221904/232947202-b00ca11c-083c-46ca-ace4-538e3a11ba53.png">

**go inside book**

<img width="700" alt="スクリーンショット 2023-04-18 18 59 09" src="https://user-images.githubusercontent.com/73221904/232947345-879f61ff-98b5-461c-a060-9f3f5853b055.png">


### Notification
User can recieve notification when other user follow them , comment on card or like card. They can get notification realtime as I used socket.io.

<img width="700" alt="スクリーンショット 2023-04-18 18 48 44" src="https://user-images.githubusercontent.com/73221904/232947255-7a58ffe9-55c0-438e-b182-b782a540e161.png">














