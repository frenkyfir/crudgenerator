<?php
        namespace App\Http\Controllers\Back\Products;
        use Illuminate\Http\Request;
        use App\Http\Controllers\Controller;
        use App\Models\Products;
        use DB;
        use Hash;
        use Illuminate\Support\Arr;

        class ProductsController extends Controller
        {
            /**
             * Display a listing of the resource.
             *
             * @return \Illuminate\Http\Response
             */
        
            public function index(Request $request)
            {
                $data = Products::orderBy("id","DESC")->get();
                return view("back.Products.index",compact("data"))
                    ->with("i", ($request->input("page", 1) - 1) * 5);
            }
        
            /**
             * Show the form for creating a new resource.
             *
             * @return \Illuminate\Http\Response
             */
        
            public function create()
            {
                return view("back.Products.create");
            }
        
        
        
            /**
             * Store a newly created resource in storage.
             *
             * @param  \Illuminate\Http\Request  $request
             * @return \Illuminate\Http\Response
             */
        
            public function store(Request $request)
            {
               
                    
                $input = $request->all();
                
              if ($request->hasfile("image")) {
                $fileName = time() . rand(1, 100) . "." . $request->file("image")->extension();
                $file = $request->file("image");
                $file->move(public_path("images/Products"), $fileName);
                dump("images");
            }
            if(!empty($fileName)){ 
                $input["image"] = $fileName;
            }else{
                $input["image"] = "";
            }
              
                
                $Products = Products::create($input);
               
            
                return redirect()->route("products.index")
                ->with("success","Products created successfully");
            
            }
        
        
            /**
                 * Display the specified resource.
                 *
                 * @param  int  $id
                 * @return \Illuminate\Http\Response
                 */
        
                public function show($id)
                {
                    $Products = Products::find($id);
                    return view("back.Products.show",compact("Products"));
                }
            

            
                /**
                 * Show the form for editing the specified resource.
                 *
                 * @param  int  $id
                 * @return \Illuminate\Http\Response
                 */
            
                public function edit($id)
                {
                    $Products = Products::find($id);
                    return view("back.Products.edit",compact("Products"));
                }
            

            
                /**
                 * Update the specified resource in storage.
                 *
                 * @param  \Illuminate\Http\Request  $request
                 * @param  int  $id
                 * @return \Illuminate\Http\Response
                 */
            
                public function update(Request $request, $id)
                {
                
                   
                        
                        

                    $input = $request->all();

                    
              if ($request->hasfile("image")) {
                $fileName = time() . rand(1, 100) . "." . $request->file("image")->extension();
                $file = $request->file("image");
                $file->move(public_path("images/Products"), $fileName);
                dump("images");
            }
            if(!empty($fileName)){ 
                $input["image"] = $fileName;
            }else{
                $input["image"] = "";
            }
              
                    
                    
                    $Products = Products::find($id);
                    $Products->update($input);
                
                    return redirect()->route("products.index")
                    ->with("success","Products updated successfully");
                
                }
            

                /**
                 * Remove the specified resource from storage.
                 *
                 * @param  int  $id
                 * @return \Illuminate\Http\Response
                 */
            
                public function destroy($id)
                {
                    Products::find($id)->delete();
                    return redirect()->route("products.index")
                    ->with("success","Products deleted successfully");
                
                }
            }
        
        ?>