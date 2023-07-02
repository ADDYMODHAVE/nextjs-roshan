import classes from "./SmallIntro.module.css";

export const SmallIntro = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row justify-content-center align-items-center bg-dark rounded shadow m-2 "
        id="about"
      >
        <div className="overflow-x-visible">
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaWkbugzkfRBq2RSB_2eleHOE6b_5WyzHKMqZpXM4Aewp4UfmKPt1qNP2XZWty5u_gI29ByxDmK9g20iFEM0tL1XelmR6oFu-mehzeh3Y8jLTYMQ_9mNvGAuTDUybmoeMXYR5MNhtEnB7_nNlMirYBLaDk1H447nrMhnpQu9Dox3-yQDdtNVUgJWuBZck-78PTfeG9zGz9Ys-vwQIKVbYKuBmf2NRXYs-dP9rEdiR5K25l6sqSUsEA27876MKmyTK4DEKWISJWclNQjA5SnIyeBLOp9KpvwtLrpksTqjRVFkB8Qfrn6szyZaDW-FtWH73QugwoMFwtu9XRn5tqUYQN2IF4M79-RpWjZJcIonptqqGe2tBHDRgG6BbfM5-zHaYG9YnR0oeTUncsrlk9aoKkGXbWnLI223Gd3yRXRYODoKKo83iUOAu-gvTF3ezxYrW6bLJr5W5L1GpinO4mKffJqpN2UTmVBnCFUE8Vu77QD2ccetaXtNdxNfxCCAjGck5a5pKNEc9WHXAiq_hOmunxbuW74HpfyEKP7FnI4Sa-zuc2UlIUeP9OwmzrIJKXfPW1lKtqxwW1tyarApB4JVoebMXadzsiPCcfcc67eEVxDYzZhh9JzM0d2X8fh6smZLn0FwHimmScry1b601Paze2ozWQ7YTZ16Jkzok8y6ciFe3RdUtMC_b8OPH5L46PMYbHd4-7lbuZjo9ZpR6QN3Lo0mpfc5IsJVC9iCS3K2WeLquSPxF9Y5hukf4mqcyk5C9a_UFkmGuNvMQ1PJ1D3-mK2YOMHM5y8B-67KsqsChSXI18exW08DkntWtbVtJeIgt26T0AFE40KQK3YIiTumEIXOMXGqnrQ397L21XAcYHuqLIfveMYrU78EoctUf3rrfXF4z_Bzr0EeJ7ZnCOqnFv1CPg5_i4NuJG_UGHJyyBSJU9rzfp2upzhLhgbydStl9AGOCAWKRmMr3ZdoXATa-IDqYQJkmoZK=w948-h948-s-no?authuser=2"
            className="img fluid rounded-circle p-2 overflow-x-auto"
            style={{ width: "30rem", height: "30rem" }}
            alt="IMAGE"
          />
        </div>
        <div className={classes.firstletterCapital}>
          <p className="fs-5 m-3 text-white">
            {" "}
            Hello My name is{" "}
            <span className="text-info fw-bold">ROSHAN CHINCHPURE.</span> I am
            <span className="text-info fw-bold">
              {" "}
              Photographer & Cinematographer
            </span>{" "}
            . I have 8 years exprience and I am living In{" "}
            <span className="text-info fw-bold"> Pune</span> . Currently working
            as full time Photographer &{" "}
            <span className="text-info fw-bold">Cinematographer.</span> I am
            taking orders from all over{" "}
            <span className="text-info fw-bold">India.</span>.
          </p>
        </div>
      </div>
    </>
  );
};
