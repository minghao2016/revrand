Search.setIndex({envversion:48,filenames:["basis_funcs","btypes","demo","dev/documentation","dev/index","dev/testing","generated/revrand.basis_functions.BiasBasis","generated/revrand.basis_functions.FastFoodGM","generated/revrand.basis_functions.FastFoodRBF","generated/revrand.basis_functions.LinearBasis","generated/revrand.basis_functions.PolynomialBasis","generated/revrand.basis_functions.RadialBasis","generated/revrand.basis_functions.RandomCauchy","generated/revrand.basis_functions.RandomLaplace","generated/revrand.basis_functions.RandomMatern32","generated/revrand.basis_functions.RandomMatern52","generated/revrand.basis_functions.RandomRBF","generated/revrand.basis_functions.SigmoidalBasis","generated/revrand.basis_functions.spectralmixture","generated/revrand.likelihoods.Bernoulli","generated/revrand.likelihoods.Binomial","generated/revrand.likelihoods.Gaussian","generated/revrand.likelihoods.Poisson","generated/revrand.optimize.base","generated/revrand.optimize.base.candidate_start_points_lattice","generated/revrand.optimize.base.candidate_start_points_random","generated/revrand.optimize.base.logtrick_minimizer","generated/revrand.optimize.base.logtrick_sgd","generated/revrand.optimize.base.structured_minimizer","generated/revrand.optimize.base.structured_sgd","generated/revrand.optimize.sgd.AdaDelta","generated/revrand.optimize.sgd.AdaGrad","generated/revrand.optimize.sgd.Adam","generated/revrand.optimize.sgd.Momentum","generated/revrand.optimize.sgd.sgd","generated/revrand.utils.base","generated/revrand.utils.base.append_or_extend","generated/revrand.utils.base.atleast_list","generated/revrand.utils.base.couple","generated/revrand.utils.base.decouple","generated/revrand.utils.base.flatten","generated/revrand.utils.base.map_indices","generated/revrand.utils.base.nwise","generated/revrand.utils.base.unflatten","generated/revrand.utils.datasets.fetch_gpml_sarcos_data","generated/revrand.utils.datasets.fetch_gpml_usps_resampled_data","generated/revrand.utils.datasets.gen_gausprocess_se","generated/revrand.utils.datasets.make_polynomial","generated/revrand.utils.datasets.make_regression","glm","index","installation","likelihoods","mathfun","metrics","optimize","quickstart","slm","utils"],objects:{"revrand.basis_functions":{BiasBasis:[6,0,1,""],FastFoodGM:[7,0,1,""],FastFoodRBF:[8,0,1,""],LinearBasis:[9,0,1,""],PolynomialBasis:[10,0,1,""],RadialBasis:[11,0,1,""],RandomCauchy:[12,0,1,""],RandomLaplace:[13,0,1,""],RandomMatern32:[14,0,1,""],RandomMatern52:[15,0,1,""],RandomRBF:[16,0,1,""],SigmoidalBasis:[17,0,1,""],spectralmixture:[18,2,1,""]},"revrand.basis_functions.BiasBasis":{"__init__":[6,1,1,""]},"revrand.basis_functions.FastFoodGM":{"__init__":[7,1,1,""]},"revrand.basis_functions.FastFoodRBF":{"__init__":[8,1,1,""]},"revrand.basis_functions.LinearBasis":{"__init__":[9,1,1,""]},"revrand.basis_functions.PolynomialBasis":{"__init__":[10,1,1,""]},"revrand.basis_functions.RadialBasis":{"__init__":[11,1,1,""]},"revrand.basis_functions.RandomCauchy":{"__init__":[12,1,1,""]},"revrand.basis_functions.RandomLaplace":{"__init__":[13,1,1,""]},"revrand.basis_functions.RandomMatern32":{"__init__":[14,1,1,""]},"revrand.basis_functions.RandomMatern52":{"__init__":[15,1,1,""]},"revrand.basis_functions.RandomRBF":{"__init__":[16,1,1,""]},"revrand.basis_functions.SigmoidalBasis":{"__init__":[17,1,1,""]},"revrand.btypes":{Bound:[1,0,1,""],Parameter:[1,0,1,""],Positive:[1,0,1,""],hstack:[1,2,1,""],ravel:[1,2,1,""],shape:[1,2,1,""]},"revrand.btypes.Bound":{lower:[1,4,1,""],upper:[1,4,1,""]},"revrand.btypes.Parameter":{bound:[1,4,1,""],shape:[1,4,1,""],value:[1,4,1,""]},"revrand.glm":{GeneralisedLinearModel:[49,0,1,""]},"revrand.glm.GeneralisedLinearModel":{fit:[49,1,1,""],predict:[49,1,1,""],predict_cdf:[49,1,1,""],predict_interval:[49,1,1,""],predict_logpdf:[49,1,1,""],predict_moments:[49,1,1,""]},"revrand.likelihoods":{Bernoulli:[19,0,1,""],Binomial:[20,0,1,""],Gaussian:[21,0,1,""],Poisson:[22,0,1,""]},"revrand.likelihoods.Bernoulli":{"__init__":[19,1,1,""]},"revrand.likelihoods.Binomial":{"__init__":[20,1,1,""]},"revrand.likelihoods.Gaussian":{"__init__":[21,1,1,""]},"revrand.likelihoods.Poisson":{"__init__":[22,1,1,""]},"revrand.mathfun":{linalg:[53,3,0,"-"],special:[53,3,0,"-"]},"revrand.mathfun.linalg":{cho_log_det:[53,2,1,""],hadamard:[53,2,1,""],solve_posdef:[53,2,1,""],svd_log_det:[53,2,1,""],svd_solve:[53,2,1,""]},"revrand.mathfun.special":{logsumexp:[53,2,1,""],softmax:[53,2,1,""],softplus:[53,2,1,""]},"revrand.metrics":{lins_ccc:[54,2,1,""],mll:[54,2,1,""],msll:[54,2,1,""],smse:[54,2,1,""]},"revrand.optimize":{base:[23,3,0,"-"]},"revrand.optimize.base":{candidate_start_points_lattice:[24,2,1,""],candidate_start_points_random:[25,2,1,""],logtrick_minimizer:[26,2,1,""],logtrick_sgd:[27,2,1,""],structured_minimizer:[28,2,1,""],structured_sgd:[29,2,1,""]},"revrand.optimize.sgd":{AdaDelta:[30,0,1,""],AdaGrad:[31,0,1,""],Adam:[32,0,1,""],Momentum:[33,0,1,""],sgd:[34,2,1,""]},"revrand.optimize.sgd.AdaDelta":{"__init__":[30,1,1,""]},"revrand.optimize.sgd.AdaGrad":{"__init__":[31,1,1,""]},"revrand.optimize.sgd.Adam":{"__init__":[32,1,1,""]},"revrand.optimize.sgd.Momentum":{"__init__":[33,1,1,""]},"revrand.slm":{StandardLinearModel:[57,0,1,""]},"revrand.slm.StandardLinearModel":{fit:[57,1,1,""],predict:[57,1,1,""],predict_moments:[57,1,1,""]},"revrand.utils":{base:[35,3,0,"-"]},"revrand.utils.base":{append_or_extend:[36,2,1,""],atleast_list:[37,2,1,""],couple:[38,2,1,""],decouple:[39,2,1,""],flatten:[40,2,1,""],map_indices:[41,2,1,""],nwise:[42,2,1,""],unflatten:[43,2,1,""]},"revrand.utils.datasets":{fetch_gpml_sarcos_data:[44,2,1,""],fetch_gpml_usps_resampled_data:[45,2,1,""],gen_gausprocess_se:[46,2,1,""],make_polynomial:[47,2,1,""],make_regression:[48,2,1,""]},revrand:{btypes:[1,3,0,"-"],glm:[49,3,0,"-"],metrics:[54,3,0,"-"],slm:[57,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","module","Python module"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function","3":"py:module","4":"py:attribute"},terms:{"1370u":53,"1dobject":40,"30u":53,"560u":53,"__init__":[6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,30,31,32,33],"__name__":[49,57],"_rosen":55,"case":[49,57],"class":[],"default":[0,1,6,10,34,40,49,56],"final":[34,42,56],"float":[0,1,6,30,31,32,33,34,41,49,52,53,54,57],"import":[3,26,27,28,29,41,49,51,55,56,57],"int":[0,7,8,10,12,13,14,15,16,18,24,25,34,42,43,49,53,57],"long":[26,27],"new":[0,43],"return":[0,1,6,18,24,25,26,27,28,29,34,36,37,38,39,40,42,43,49,52,53,54,57],"true":[0,1,2,9,10,25,26,27,28,29,34,40,42,44,45,47,49,53,54,56],"var":[52,57],"while":49,about:3,abov:[1,56],accept:[3,28,29],across:41,act:[0,10,42],activ:[],actual:[0,7,8,12,13,14,15,16,56,57],adadelta:[],adapt:2,add:0,add_subplot:55,additionali:49,adopt:3,advanc:[42,56],advantag:56,afterward:53,again:[0,42,49,56],against:[2,53],agument:0,algebra:[],algorithm:[0,30,31,32,33,49,53,56],alistair:53,all:[0,1,7,25,45,49,56],allow:[1,28,29,53,56],along:[34,53],alpha:[32,55],alreadi:56,also:[0,2,3,5,20,34,40,49,52,53,56,57],altern:5,although:3,alwai:[0,7],analyt:2,andrew:3,ani:[26,27,37,56],annot:55,append:36,appli:[0,7,18,20,26,27,52,53,56],applic:[0,53,56],appliedx:53,apply_grad:0,apply_ind:[0,7,8,12,13,14,15,16,18,56],appropri:[1,44,45,57],approx:[0,18,56],approxim:[0,2,7,8,12,13,14,15,16,18,49,56],arang:53,arbitrari:49,ard:[0,7,8,11,12,13,14,15,16],arg:[26,27,34,38,41,52],argmin:55,argsort:53,argument:[0,34,38,39,49],ari:[40,43],arrai:[0,1,11,17,24,25,26,27,28,29,34,40,41,43,44,45,48,49,52,53,55,57],array1d:1,array_equ:40,arrowprop:55,arrowstyl:55,artifici:[56,57],arxiv:[2,49,56],ascertain:0,associ:[1,56],assort:35,assum:56,astyp:53,attribut:[6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22],augment:[28,29],automat:3,avoid:56,ax1:55,ax2:55,axes3d:55,axi:[34,53],azim:55,back:42,bad:54,base:[],bases_per_compon:[0,18],basic:[0,9,53,56],basicconfig:[49,57],basis_funct:[],basis_list:0,basiscat:[0,18],batch:[34,49],batch_siz:[27,29,34,49],batch_weight:49,bayesian:[],becaus:56,been:[5,22,52],befit:40,befor:[34,56],behaviour:[0,11],benchmark:[],benefit:49,bernoulli:[],beta1:32,beta2:32,better:49,between:[49,54],bfg:[2,26,28,56],bia:[0,6,10,47,48,56],biasbasi:[],binari:[2,19,52],black:55,blei:[2,49,56],bool:[0,9,10,26,27,34,40,49,53],both:[3,56],bound:[],branch:3,btype:[0,1,7,8,11,12,13,14,15,16,17,21,26,27,28,29,49,52,56,57],build:[3,56],build_sphinx:3,builtin:3,cach:51,call:[0,1,43,49,53,57],callabl:[0,34,40],can:[0,3,5,6,20,22,26,27,49,52,56],candid:[],candidate_start_point:25,candidates_min:55,cannot:1,carl:2,carlo:49,cart:[0,7,18,56,57],cauchi:[0,12],cdf:52,centr:[0,11,17],cfg:5,chain:40,chang:49,cheap:0,cho_log_det:53,choleski:53,choos:3,christoph:2,clamp:53,close:54,cmap:55,code:[49,55,57],coef:47,coeffici:54,collect:5,color:55,column:[0,6,9,10,18,53,56],com:56,commit:3,compar:[2,49],compat:49,complex:0,compon:[0,7,12,13,14,15,16,18,49],compos:38,composit:[],comput:[49,51,53],concaten:[0,1,10,18,36,40,56],concatent:0,conceptu:49,concord:54,concordance_correlation_coeffici:54,concret:49,condit:34,condition:[21,52],confer:[56,57],confid:49,configur:5,confus:40,conjug:[21,52],consist:38,constant:[0,6,31],constructor:[0,18],contain:[28,29,40],content:50,continu:[30,32,49],contour:55,contribut:3,convari:57,convent:3,converg:[34,49,57],correctli:5,correl:54,correspond:[19,20,21,22,26,27,52,53],cost:[26,27,28,29],count:[0,20,52],count_arg:0,covari:[0,12,13,14,15,16,49,56],creat:[0,5,7,8,10,12,13,14,15,16,18,39,42],criterion:[49,57],cstride:55,cumsum:43,cumul:[49,52],custom_reshap:43,cutoff:53,cycl:49,d2f:52,d3f:52,darkgreen:55,data:[27,29,34,44,45,53],data_hom:[44,45],decai:[30,31,32,33],decomposit:53,decor:[0,1,23,26,27],def:[26,27,28,29],defin:[0,1,17,28,29,34],definit:53,degre:47,demonstr:56,densiti:[49,52],depend:[],deploi:3,deploy:51,deriv:[49,52],descend:1,descent:[2,34],describ:[1,21,52],det:53,determin:53,deviat:[21,52],dffun:0,diagon:[49,56],dict:55,differ:[5,40,49,53],dimens:[0,7,8,12,13,14,15,16,18,24,43,49,53,56,57],dimension:[0,11,17,40],direct:34,directli:57,directori:[3,5],discret:49,displai:[49,57],distribut:[49,52,54,56,57],divid:31,doc:[3,56],docstr:[3,5],doctest:[0,5,24,40,41,43,44,45],document:[],doe:56,don:3,dot:[0,26,27,28,29],download:51,dpd2f:52,dphi:0,drawn:56,dtype:[26,27,43],dxd:[0,11,17],each:[0,2,12,13,14,15,16,18,34,38,40,52,53],easi:56,easili:[0,18],edgecolor:[55,56],edward:2,effici:41,eighteenth:[56,57],either:[22,40,52],element:[1,28,29,34,37,40,42],elev:55,ellipsi:[24,44,45],els:[36,40,41],enabl:0,end:49,enforc:[26,27],ensur:[5,30,32],entir:40,enumer:[41,42],environ:5,epsilon:[30,31,32],equival:[25,38,41,43],error:[34,54],essenti:[0,7,10],estim:2,eta:[31,33],eval_obj:[27,29,34],evalu:[1,34,49,52],even:[28,29,49],everyth:49,evid:57,exact:[49,57],exampl:[],exclud:[0,49],execut:3,exist:[3,5],exp:[22,41,52,53,56],expans:56,expect:[0,8,11,12,13,14,15,16,49,52,57],experi:2,expleft:[],explicit:[0,7],exponenti:[22,52],express:49,extend:36,extens:[1,3,56],extra:0,ey_g:56,ey_max:49,ey_min:49,eyn:56,eyx:56,f_n:[],f_new:38,f_star:57,facecolor:[55,56],factor:53,factoris:53,fals:[0,9,34,40,45,47,53],fasfoodgm:[0,18],fashion:53,fast:[0,7,8,18,53,56,57],fastfood:56,fastfoodgm:[],fastfoodrbf:[],featur:[],fetch:[44,45],few:[49,56],fig:55,figsiz:55,figur:55,file:3,fill_between:56,first:[28,29,34,42,53],flat:[40,43],flatbound:1,flatten:[],flatvalu:1,flexibl:49,follow:[0,53,56],food:[0,8],form:[0,3,5,7],former:40,forwardli:49,found:[5,57],framework:[],frequenc:[0,7],from:[],full:[0,18,49,56,57],fun:[0,34],func:[0,48],gaussian:[],gausspecmix:[0,18],gener:[0,21,24,25,37,46,47,52],generalisedlinearmodel:[49,56],generlis:2,gershman:[2,49,56],get:[0,1,52],get_dim:0,getlogg:[49,57],ghp:[3,51],git:56,github:[3,56],give:[0,6,32,33,34,42],given:[0,2,7,38,43,49,52,53],glm:[2,19,20,21,49,52,56],good:[54,56],googl:3,gpml_sarco:44,grad:[0,34],gradient:[],gradl:29,gradw:[27,29],greater:1,grid:[24,56],guarante:1,hadamard:53,hadamard_transform:53,handi:35,handwritten:[2,45],have:[0,3,5,11,22,34,49,52,56,57],helper:[0,18],henc:56,here:[49,56],hessian:52,heterogen:40,hire:55,hoffman:[2,49,56],horizont:[1,40],how:[0,7,8,12,13,14,15,16,18,49,56],howev:[26,27],hsplit:43,hstack:[1,27,29,40],html:3,http:[53,54,56],hurri:3,hyperparamet:[56,57],hyperrectangl:[24,25],ight:[],ignor:[1,24],imaginari:[0,12,13,14,15,16],immut:1,implement:[0,7,18,22,26,27,40,49,52,56,57],includ:[0,10,49,54],include_bia:[0,10],incur:53,index:[0,18,50],indic:[],individu:3,induc:1,infer:[2,49,52,56],info:[49,57],inform:56,ini:5,init:56,init_lenscal:56,initi:[0,1,21,26,27,28,29,34,49,52,56,57],initialis:[0,7,8,11,12,13,14,15,16,17],inner:[26,27],input:[28,29,34,40,49,56,57],instal:[],instanc:[1,49,56],instead:53,instruct:56,integ:52,integr:5,intellig:[56,57],interact:51,intercept:[0,10],interfac:49,intern:[56,57],internet:[44,45],interpret:5,interv:49,invers:[39,40,43,56],ipython:51,isclos:53,isinst:1,isotrop:[0,8,11,12,13,14,15,16,49],isscalar:0,item:42,iter:[2,34,41,42,49,57],itself:40,jac:[26,28],jet:55,jitter:[30,32],julia:53,just:[0,6,9,28,29,49,56],kept:53,kernel:[0,7,12,13,14,15,16,18,46,56,57],kwarg:[0,38],label:56,lambda:[0,25,38,39,41,43,48],lambda_0:[26,27,28,29],lambda_:[26,27,28,29],laplac:[0,13],larg:[],larger:[0,7,8,53],largest:1,last:[1,43],latend:[],latent:[19,20,21,22,52],latter:40,learn:[],learnabl:49,least:37,left:[],legend:56,len:[0,18,24,25,27,29,42],length:[0,1,7,8,11,12,13,14,15,16,17,49,53,56],lenscal:[0,8,11,12,13,14,15,16,46,56],lenscale_init:[0,7,8,11,12,13,14,15,16,17,18],lenscales_init:[0,18],less:54,let:[26,27,56],level:[5,49,57],librari:2,like:[0,11,42,49,56,57],like_hyp:56,likelihood:[],likelihood_arg:49,lin:54,linalg:53,line:25,linear:[],linearbasi:[],linestyl:56,link:56,lins_ccc:54,linspac:[27,29],list:[0,1,18,24,25,28,29,34,36,37,40,41,42,43,52],littl:49,llhood:56,loc:54,local:57,log:[1,26,27,41,49,52,53,54,56,57],logdet:53,logist:[0,2,17,19,20,52],loglik:52,loglinear:56,lognorm:55,logp:[49,52],logp_max:49,logp_min:49,logpdf:54,logsumexp:53,look:56,loss:54,lot:56,lower:[1,49,53,57],lsex:53,machin:[0,2,11,56],mai:[1,22,49,52],main:49,maint:49,make:[0,3,12,13,14,15,16,18,48,49],manag:5,mani:[0,3,7,8,12,13,14,15,16,18],map:[19,20,41,43,52],margin:57,match:54,matern:[0,14,15],math:[],mathbf:[],mathfun:53,matplotlib:[51,55,56],matrix:[0,53,56,57],matthew:2,max:34,maximum:[49,57],maxit:[34,49,57],mayb:40,mean:[0,7,49,54,56,57],mean_init:[0,7,18],mean_prob:54,means_init:[0,18],median:49,messag:[34,49,57],method:[0,2,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,26,28,30,31,32,33],metric:[],mgrid:55,might:40,min:34,mini:34,minim:[],minima:57,minimum:49,mit:2,mixtur:[0,7,18,49,56],mll:54,modal:56,model:[],modif:[2,49],modifi:56,modul:[49,50,57],modulo:57,moment:49,mont:49,more:[0,2,24,25,40,41,54],most:[1,3,5,43],mpl_toolkit:55,mplot3d:55,msll:54,mu_j:[],mul:41,multi:56,multidimension:40,multipl:[0,18],multipli:53,multiproc:49,multiprocess:49,must:[0,28,29,30,31,32,33,34,43],mybasis1:0,mybasis2:0,mylist:36,n_candid:25,n_featur:48,n_sampl:[47,48],n_star:[49,57],naiv:[53,54],napoleon:3,narrai:34,natur:53,nbase:[0,7,8,12,13,14,15,16,56],ncompon:[0,18],ndarrai:[0,1,11,17,24,25,34,40,43,49,52,53,54,57],nearest:[0,7,8],need:[21,26,27,52],neg:[53,54],neural:56,new_min:[26,28],new_sgd:[27,29],newaxi:[27,29],next:42,nice:3,nicta:[53,56],nois:[2,21,46,47,48,49,52,56],noiseless:[2,56],noisi:[2,46,47,56],non:[0,2,18,49,53,56],none:[0,1,18,25,34,42,44,45,47,48,49,55,56],nonparametr:[2,49,56],norm:[34,54,55],normalis:53,normalize_whitespac:[40,41,43],note:[25,38,40,41,42,43,49,53,57],notebook:[2,51,56],now:[2,56],nsampl:49,ntest:46,ntrain:46,num:[24,55],number:[0,8,11,12,13,14,15,16,17,18,24,25,34,49,52,56,57],numer:53,numpi:[3,34,51,53,55,56],obj:[27,29,34,36],object:[0,1,2,7,8,11,12,13,14,15,16,17,21,34,36,37,40,42,49,52,57],observ:[0,7,8,12,13,14,15,16,18,20,21,34,49,52,56,57],obtain:49,offset:[0,6],okind:53,onescol:[0,9,56],onli:[0,1,26,27,40,52,53],onto:[0,9,56],oper:[0,39,41,53],opert:43,oppos:49,optim:[],optimis:[1,21,49,52,53,56,57],optimizeresult:34,option:[],order:[0,10,43,49,53],org:[53,54],origin:53,other:0,otherwis:[0,8,11,12,13,14,15,16,37,40,54],our:56,output:[0,56],over:[42,49,56],overhead:53,p_max:49,p_min:49,packag:5,page:[3,50],pair:[1,24,25,28,29,34,38],pairwis:42,paper:49,paralellis:49,param:[0,52],paramet:[],parit:[],pars:[3,44,45],partial:[0,41,42,43,52,56],particular:[26,27,49],partucularli:0,pass:[0,2,18,49,53],pdf:55,pend:56,per:[0,18,20,24,49,52,53],percentil:49,perfect:54,perform:53,phi:[0,56],pip:56,plot:[2,55,56],plot_surfac:55,plt:55,plu:53,png:55,point:[],polynomi:[0,10,47],polynomialbasi:[],posit:[0,1,26,27,53,56],possibl:[20,40,52],postcomp:49,posterior:[49,56,57],potenti:40,power:[0,7,8],pre:56,precis:41,predict:[49,54,56,57],predict_cdf:49,predict_interv:[49,56],predict_logpdf:49,predict_mo:[49,56,57],predictor:54,prepend:[0,9],preprint:[2,49,56],present:2,press:2,pretti:56,prevent:31,previou:2,prior:[19,20,21,52],prob:54,probabl:[19,20,42,49,52],problem:[47,48],proceed:[56,57],prod:[1,24,43],project:[3,5,55],promot:37,properties1:0,properties2:0,provid:[2,49],push:3,pyplot:[55,56],pytest:[5,51],python:[3,5,44,45,49,56,57],quantil:[49,52],queri:[49,52,56,57],quick:56,quickstart:[],quit:0,rac:[],radial:[0,2,8,11,56],radialbasi:[],rahimi:56,rais:42,randn:[0,27,29,54,56],random:[],random_st:[25,47,48],randomcauchi:[],randomlaplac:[],randomli:25,randommatern32:[],randommatern52:[],randomrbf:[],rang:[1,42],rank:0,rasmussen:2,rate:[2,30,31,32,33,49],rather:[28,29,40,57],ravel:[1,40],rbf:[0,16,46],reach:34,real:[0,1,12,13,14,15,16],realli:56,recent:[1,43],recht:56,recurs:[40,53],reduc:49,regress:[],regressor:[0,6,56,57],regular:56,regularis:[49,56,57],reid:53,rel:49,relev:[0,11],render:3,reorder:53,repres:[28,29,43],represent:[0,7],request:51,requir:[49,53,56],res_lambda:[28,29],res_w:[28,29],reshap:43,respect:5,rest:56,restructuredtext:3,result:[0,2,34,40,49,53,56],return_coef:47,returns_shap:40,revrand:[],rho:[30,33],root:5,rosen:55,roughli:[25,41],round:[44,48],row:53,rst:[3,56],rstride:55,run:[3,5,49,56],s_tol:53,same:[5,38,49,53],sampl:[0,2,25,49,57],sarco:44,sarlo:56,scalar:[0,1,6,7,8,11,12,13,14,15,16,17,18,21,40,49,52,54],scalar_reshap:43,scale:[],scalr:[0,7],scatter:55,scikit:[2,49,51],scipi:[3,26,28,51,55],script:56,search:50,second:[28,29,40,52],section:5,see:[0,49,53,54,56,57],seen:56,segment:25,self:[0,57],semi:53,separ:56,sequenc:[0,1,29,34,49,53],set:56,set_xlabel:55,set_xlim:55,set_ylabel:55,set_ylim:55,set_zlabel:55,set_zlim:55,setup:[3,5,56],setuptool:5,sgd:[],sgdupdat:[34,49],shape:[0,1,7,8,11,12,13,14,15,16,17,24,25,40,43,44,45,48,49,53,56,57],should:[30,32,42,54],show:[55,56],sigma:[],sigmoid:[0,17,19,20,52],sigmoidalbasi:[],signatur:34,similar:[2,49,53,56],simpl:[26,27,57],simpli:[3,5,56],sin:[48,53],sinc:[1,21,40,52,53],sine:2,singl:[0,28,29,38,53],singleton:40,singular:53,size:[25,40,42,43],skip:[0,41],sklearn:54,slice:[0,7,8,12,13,14,15,16,18,56],slice_init:0,slice_transform:0,slide:42,slm:[56,57],slower:49,small:[30,31,32,53],smaller:53,smallest:1,smola:[56,57],smooth:[30,31,32,33],smse:54,smx:53,soft:53,softmax:53,softplu:[22,52,53],softplut:[22,52],solut:[2,57],solv:[2,53],solve_posdef:53,solve_posdef_svd:53,some:[42,54,56],someth:[40,49,56,57],sometim:3,song:[56,57],sourc:55,sp_min:[26,28],special:[],specialis:0,specifi:[0,43,53],spectral:[0,7,18],spectralmixtur:[],sphinx:[3,51],split:34,spx:53,sq_norm:[26,28],sqrt:56,squar:[2,32,54],stabl:53,stack:[1,40],stai:1,standard:[],standardis:54,standardlinearmodel:[56,57],start:[],statist:[56,57],statu:[49,57],stepsiz:32,still:49,stochasist:2,str:34,straight:49,string:[22,52],structur:[0,28,29],structured_minim:[],style:3,subclass:0,subcommand:[3,5],subsequ:56,suffici:53,sum:[2,27,29,53],summat:53,sure:0,svd:53,svd_log_det:53,svd_solv:53,sy_g:56,system:[53,56],take:[0,28,29,38,39,56],tanenbaum:3,target:[19,20,21,22,44,45,49,52,54,56,57],task:[19,21,22,52,56],teardown:5,tee:42,tell:34,tensor:0,term:[0,6,10,30,31,32,33,49,56],termin:34,test:[],than:[0,1,28,29,40,41,53,57],thate:38,thei:[0,49],them:3,therebi:56,thi:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,18,21,22,26,27,34,40,42,49,52,53,56,57],thing:[3,56],third:[24,49,52],though:[41,49],three:2,through:[2,53],tight:57,time:[3,42,53,56],titl:56,togeth:[5,49],tol:[49,57],toler:[49,57],too:0,tool:3,total:[20,43,52],tox:[5,51],traceback:[1,43],tractabl:49,train:[44,45,54,56],tranfcn:[22,52,56],tranform:[22,52],transform:[0,2,19,20,21,22,52,53,56],transpose_data:[44,45],treat:40,tri:53,trick:[1,26,27,53],truncat:53,truth:[54,56],tup:1,tupl:[1,24,25,28,40,42,43],tweak:49,twice:[0,12,13,14,15,16],two:[0,7,8,38,39],type:[],typic:1,uncertainti:[0,11,56],unchang:43,under:[5,49,52,54],unflatten:[],uniform:[24,25],uniformli:25,unipath:51,uniqu:[0,7,8,12,13,14,15,16,18],unit:5,univari:[21,52],unstabl:53,unstructur:[26,27],untounch:37,unvectorize_arg:55,updat:[32,34,49],upper:[1,49,53],usps_resampl:45,val:56,valid:[],valu:[0,1,6,18,19,20,21,22,26,27,28,29,34,38,49,52,53,56,57],valueerror:[1,42,43],var_init:[21,52,56],varg:0,variabl:[1,26,27,28,29,34],varianc:[21,49,52,54,57],variat:[2,49,56],variou:[0,2,5,22,52,53],vector:[0,7,8,11,12,13,14,15,16,53,54],vectoris:53,veri:[53,56],version:5,vf_g:56,view:[49,57],virtual:5,virtualenv:5,visual:51,vy_g:56,w_0:[26,27,28,29],wai:53,walsh:53,want:37,wave:2,weight:[2,33,49,56,57],well:56,when:[0,1,34,40,56],where:[0,2,10,11,17,19,20,21,22,26,27,34,49,52,53],whether:34,which:[0,1,2,3,5,10,18,22,52,54,56],wiki:[53,54],wikipedia:[53,54],william:2,wilson:[56,57],window:42,within:[24,25,52,56],work:[0,26,27,53,56],would:53,wrapper:[26,27],written:3,x_star:[49,57],xdim:[0,7,8,12,13,14,15,16,18,56],xlabel:56,xmax:46,xmin:46,xpl_:56,xtest:56,xytext:55,y95n:56,y95x:56,y_est:[27,29],y_n:[],y_pred:54,y_star:[49,57],y_train:54,y_true:54,y_var:54,yang:[56,57],yield:57,ylabel:56,you:[0,3,5,37,56],your:[49,57],zeiler:2,zero:31,zeros_lik:54,zip:[25,42]},titles:["Basis Functions","Bound and Parameter Types","Demos","Documentation","Developer&#8217;s Guide","Testing","revrand.basis_functions.BiasBasis","revrand.basis_functions.FastFoodGM","revrand.basis_functions.FastFoodRBF","revrand.basis_functions.LinearBasis","revrand.basis_functions.PolynomialBasis","revrand.basis_functions.RadialBasis","revrand.basis_functions.RandomCauchy","revrand.basis_functions.RandomLaplace","revrand.basis_functions.RandomMatern32","revrand.basis_functions.RandomMatern52","revrand.basis_functions.RandomRBF","revrand.basis_functions.SigmoidalBasis","revrand.basis_functions.spectralmixture","revrand.likelihoods.Bernoulli","revrand.likelihoods.Binomial","revrand.likelihoods.Gaussian","revrand.likelihoods.Poisson","revrand.optimize.base","revrand.optimize.base.candidate_start_points_lattice","revrand.optimize.base.candidate_start_points_random","revrand.optimize.base.logtrick_minimizer","revrand.optimize.base.logtrick_sgd","revrand.optimize.base.structured_minimizer","revrand.optimize.base.structured_sgd","revrand.optimize.sgd.AdaDelta","revrand.optimize.sgd.AdaGrad","revrand.optimize.sgd.Adam","revrand.optimize.sgd.Momentum","revrand.optimize.sgd.sgd","revrand.utils.base","revrand.utils.base.append_or_extend","revrand.utils.base.atleast_list","revrand.utils.base.couple","revrand.utils.base.decouple","revrand.utils.base.flatten","revrand.utils.base.map_indices","revrand.utils.base.nwise","revrand.utils.base.unflatten","revrand.utils.datasets.fetch_gpml_sarcos_data","revrand.utils.datasets.fetch_gpml_usps_resampled_data","revrand.utils.datasets.gen_gausprocess_se","revrand.utils.datasets.make_polynomial","revrand.utils.datasets.make_regression","Generalised Linear Model","Welcome to revrand&#8217;s documentation!","Installation","Likelihood Classes","Math Utilities","Validation Metrics","Optimization","Quickstart Guide","Standard Linear Model","Utilities"],titleterms:{"class":52,"function":[0,53],adadelta:30,adagrad:31,adam:32,algebra:53,append_or_extend:36,atleast_list:37,base:[23,24,25,26,27,28,29,35,36,37,38,39,40,41,42,43],basi:0,basis_funct:[6,7,8,9,10,11,12,13,14,15,16,17,18],bayesian:56,bernoulli:19,biasbasi:6,binomi:20,bound:1,candid:55,candidate_start_points_lattic:24,candidate_start_points_random:25,classif:2,classifi:2,composit:56,coupl:38,dataset:[2,44,45,46,47,48],decoupl:39,demo:2,depend:51,develop:[4,51],digit:2,document:[3,50],draw:2,exampl:[55,56],fastfoodgm:7,fastfoodrbf:8,featur:56,fetch_gpml_sarcos_data:44,fetch_gpml_usps_resampled_data:45,fit:2,flatten:40,framework:56,from:2,gaussian:[2,21],gen_gausprocess_s:46,generalis:[2,49,56],gradient:[2,56],guid:[4,56],indic:50,instal:51,larg:56,learn:56,likelihood:[19,20,21,22,52],linear:[2,49,53,56,57],linearbasi:9,logtrick_minim:26,logtrick_sgd:27,make_polynomi:47,make_regress:48,map_indic:41,math:53,metric:54,minim:51,model:[2,49,56,57],momentum:33,nwise:42,optim:[23,24,25,26,27,28,29,30,31,32,33,34,55],option:51,paramet:1,point:55,poisson:22,polynomialbasi:10,process:2,quickstart:56,radialbasi:11,random:2,randomcauchi:12,randomlaplac:13,randommatern32:14,randommatern52:15,randomrbf:16,refer:[2,56],regress:[2,56],revrand:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50],scale:56,sgd:[30,31,32,33,34],sigmoidalbasi:17,special:53,spectralmixtur:18,standard:57,start:55,stochast:[2,56],structured_minim:28,structured_sgd:29,tabl:50,test:5,todo:[41,42],type:1,unflatten:43,usp:2,util:[35,36,37,38,39,40,41,42,43,44,45,46,47,48,53,58],valid:54,welcom:50}})