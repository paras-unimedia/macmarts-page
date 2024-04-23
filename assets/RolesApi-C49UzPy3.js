import{w as u}from"./index-Db1G4GFK.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7ef50779-eb8f-4950-9566-ff0fa0b65ba0",e._sentryDebugIdIdentifier="sentry-dbid-7ef50779-eb8f-4950-9566-ff0fa0b65ba0")}catch{}})();const c="Operations",g=["userCategories/fetchAll","userCategories/fetchOne"],l=u.enhanceEndpoints({addTagTypes:g}).injectEndpoints({endpoints:e=>({getAllUserCategories:e.query({query:({businessId:t,page:r,pageSize:a,sortBy:o,sortOrder:n,filter:i})=>{let s="?";return r&&(s+=`page=${r}&`),a&&(s+=`pageSize=${a}&`),o&&(s+=`sortBy=${o}&`),n&&(s+=`sortOrder=${n}&`),i&&(s+=`filter=${i}`),{url:`/settings/getusercategories/${t}${s}`}},providesTags:["userCategories/fetchAll"]}),getOneUserCategory:e.query({query:t=>({url:`/settings/getusercategoriesbyid/${t}`}),providesTags:["userCategories/fetchOne"]}),postUserCategory:e.mutation({query:t=>({url:"/settings/addusercategories",method:"POST",data:t}),invalidatesTags:["userCategories/fetchAll"]}),putUserCategory:e.mutation({query:t=>({url:"/settings/updateusercategories",method:"PUT",data:t}),invalidatesTags:["userCategories/fetchAll","userCategories/fetchOne"]}),deleteUserCategory:e.mutation({query:t=>({url:`/settings/deleteusercategories/${t}`,method:"DELETE"}),invalidatesTags:["userCategories/fetchAll"]})})}),{useGetAllUserCategoriesQuery:p,useGetOneUserCategoryQuery:C,usePostUserCategoryMutation:h,usePutUserCategoryMutation:A,useDeleteUserCategoryMutation:T}=l,d=["roles/fetchAll"],f=u.enhanceEndpoints({addTagTypes:d}).injectEndpoints({endpoints:e=>({getAllRoles:e.query({query:()=>({url:"/settings/getroles"}),providesTags:["roles/fetchAll"]})})}),{useGetAllRolesQuery:U}=f;export{c as B,C as a,U as b,h as c,A as d,T as e,p as u};
//# sourceMappingURL=RolesApi-C49UzPy3.js.map
