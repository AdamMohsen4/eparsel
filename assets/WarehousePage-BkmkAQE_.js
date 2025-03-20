import{j as e}from"./ui-BWkg-INl.js";import{r as s}from"./vendor-D4-GdBKu.js";import{g as a,i as l,W as r,I as c,f as i,z as t,a as n,b as o,d,e as h,j as m,F as x}from"./index-CKYxIDV8.js";import{L as p}from"./Layout-Bp3b1Irm.js";import"./charts-DzBBKkH1.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=a("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),j=a("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]),f=a("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]),g=a("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]),w=a("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),N=[{id:1,name:"Central Stockholm Storage",location:"Stockholm, Sweden",pricePerMonth:199,spaceAvailable:"25m²",features:["Climate controlled","24/7 Access","Security"],imageUrl:"/uploads/warehouse-1.jpg"},{id:2,name:"Hamburg Port Facility",location:"Hamburg, Germany",pricePerMonth:299,spaceAvailable:"50m²",features:["Loading dock","Forklift available","Maritime access"],imageUrl:"/uploads/warehouse-2.jpg"},{id:3,name:"Madrid Distribution Center",location:"Madrid, Spain",pricePerMonth:159,spaceAvailable:"15m²",features:["Shelving included","Urban location","Month-to-month"],imageUrl:"/uploads/warehouse-3.jpg"},{id:4,name:"Warsaw Logistics Hub",location:"Warsaw, Poland",pricePerMonth:249,spaceAvailable:"40m²",features:["Truck access","Shared office space","Palletizing area"],imageUrl:"/uploads/7326fca2-a314-40a0-8acb-41c65a241827.jpg"},{id:5,name:"Helsinki Cold Storage",location:"Helsinki, Finland",pricePerMonth:349,spaceAvailable:"30m²",features:["Refrigerated","Freezer space","Inventory management"],imageUrl:"/uploads/40bf477a-ad0b-486e-9a0d-83c1aff0401a.png"}],b=()=>{const{t:a}=l(),[b,y]=s.useState(""),[v,k]=s.useState(N),M=()=>{y(""),k(N)};return e.jsx(p,{children:e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(r,{className:"h-8 w-8 mr-2 text-primary"}),e.jsx("h1",{className:"text-3xl font-bold",children:a("warehouse.title","Warehouse Marketplace")})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx("div",{className:"lg:col-span-3",children:e.jsx("p",{className:"text-lg text-muted-foreground mb-4",children:a("warehouse.description","Find and rent warehouse space for your business. Storage solutions for SMEs, 3PL providers, and more.")})}),e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("form",{onSubmit:e=>{e.preventDefault(),k(N.filter((e=>e.name.toLowerCase().includes(b.toLowerCase())||e.location.toLowerCase().includes(b.toLowerCase()))))},className:"flex gap-2",children:[e.jsx(c,{placeholder:a("warehouse.searchPlaceholder","Search by name or location"),value:b,onChange:e=>y(e.target.value),className:"w-full"}),e.jsx(i,{type:"submit",size:"icon",children:e.jsx(t,{className:"h-4 w-4"})}),b&&e.jsx(i,{type:"button",variant:"ghost",onClick:M,children:a("warehouse.reset","Reset")})]})})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-6",children:[e.jsxs("div",{className:"lg:w-1/4",children:[e.jsxs(n,{children:[e.jsx(o,{children:e.jsxs(d,{className:"text-lg flex items-center gap-2",children:[e.jsx(g,{className:"h-5 w-5"}),a("warehouse.filters","Filters")]})}),e.jsxs(h,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:a("warehouse.priceRange","Price Range (€/month)")}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{placeholder:"Min",type:"number",className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(c,{placeholder:"Max",type:"number",className:"w-full"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:a("warehouse.spaceSize","Space Size (m²)")}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{placeholder:"Min",type:"number",className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(c,{placeholder:"Max",type:"number",className:"w-full"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:a("warehouse.features","Features")}),e.jsx("div",{className:"space-y-2",children:["Climate controlled","Loading dock","24/7 Access","Security"].map((s=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:s,className:"mr-2"}),e.jsx("label",{htmlFor:s,className:"text-sm",children:s})]},s)))})]}),e.jsx(i,{className:"w-full",children:a("warehouse.applyFilters","Apply Filters")})]})]}),e.jsxs(n,{className:"mt-4",children:[e.jsx(o,{children:e.jsxs(d,{className:"text-lg flex items-center gap-2",children:[e.jsx(u,{className:"h-5 w-5"}),a("warehouse.listSpace","List Your Space")]})}),e.jsxs(h,{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:a("warehouse.listSpaceDescription","Own warehouse space? List it on our marketplace and connect with businesses looking for storage solutions.")}),e.jsx(i,{className:"w-full",children:a("warehouse.listNow","List Your Warehouse")})]})]})]}),e.jsx("div",{className:"lg:w-3/4",children:0===v.length?e.jsxs(n,{className:"p-8 text-center",children:[e.jsx("p",{children:a("warehouse.noResults","No warehouses found matching your search.")}),e.jsx(i,{variant:"outline",onClick:M,className:"mt-4",children:a("warehouse.viewAll","View All Warehouses")})]}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:v.map((s=>e.jsxs(n,{className:"overflow-hidden h-full flex flex-col",children:[e.jsx("div",{className:"h-48 overflow-hidden",children:e.jsx("img",{src:s.imageUrl,alt:s.name,className:"w-full h-full object-cover",onError:e=>{e.target.src="/placeholder.svg"}})}),e.jsxs(o,{children:[e.jsx(d,{children:s.name}),e.jsxs(m,{className:"flex items-center gap-1",children:[e.jsx(w,{className:"h-4 w-4"})," ",s.location]})]}),e.jsxs(h,{className:"flex-grow",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(f,{className:"h-4 w-4 text-green-600"}),e.jsx("span",{className:"font-semibold text-green-600",children:s.pricePerMonth}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm",children:s.spaceAvailable})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:s.features.map((s=>e.jsx("span",{className:"text-xs bg-secondary/30 text-secondary-foreground px-2 py-1 rounded-full",children:s},s)))})]}),e.jsx(x,{className:"border-t pt-4",children:e.jsx(i,{className:"w-full",children:a("warehouse.rentNow","Rent Now")})})]},s.id)))})})]})]})})};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{b as default};
